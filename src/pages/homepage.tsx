import React, { useEffect, useState } from "react";
import { Row, Col, Layout, Spin, message } from "antd";
import Sidebar from "@/components/Sidebar";
import DogCard from "@/components/DogCard";
import CustomPagination from "@/components/Pagination";
import { searchDogs, fetchDogsByIds } from "@/services/dogs";
import { Dog } from "@/utils/types";

const { Content } = Layout;

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Filters
  const [breed, setBreed] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [ageRange, setAgeRange] = useState<[number, number]>([1, 20]);
  const [sort, setSort] = useState("breed:asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // Data
  const [dogs, setDogs] = useState<Dog[]>([]);

  // For breed dropdown (optional: you can fetch all possible breeds)
  const [breedList, setBreedList] = useState<string[]>([]);

  // Fetch all possible breeds once
  const fetchBreeds = async () => {
    try {
      const res = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds");
      const data = await res.json();
      setBreedList(data);
    } catch (error) {
      console.error("Failed to fetch breeds", error);
    }
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  // Whenever filter/pagination changes, fetch data
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed, zipCode, ageRange, sort, currentPage, pageSize]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1) Search to get resultIds
      const res = await searchDogs({
        size: pageSize,
        from: (currentPage - 1) * pageSize, // offset
        breeds: breed ? [breed] : undefined,
        zipCodes: zipCode ? [zipCode] : undefined,
        ageMin: ageRange[0],
        ageMax: ageRange[1],
        sort,
      });

      // 2) From the search results, fetch dog objects
      //    We only need up to `pageSize` dogs, but if the API returns exactly those IDs
      //    Then we can just do:
      const dogData = await fetchDogsByIds(res.resultIds);

      setDogs(dogData);
      setTotal(res.total);
    } catch (error) {
      console.error("Error fetching data:", error);
      message.error("Error fetching dogs. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    // Just reset to page 1 whenever filters change
    setCurrentPage(1);
    fetchData();
  };

  const handleReset = () => {
    setBreed(null);
    setZipCode("");
    setAgeRange([1, 20]);
    setSort("breed:asc");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number, newPageSize: number) => {
    setCurrentPage(page);
    setPageSize(newPageSize);
  };

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      {/* Sidebar for filters */}
      <Sidebar
        breeds={breedList}
        selectedBreed={breed}
        zipCode={zipCode}
        ageRange={ageRange}
        sortValue={sort}
        onChangeBreed={setBreed}
        onChangeZip={setZipCode}
        onChangeAgeRange={setAgeRange}
        onChangeSort={setSort}
        onFilter={handleFilter}
        onReset={handleReset}
        isLoading={loading}
      />

      {/* Main content */}
      <Layout style={{ background: "#fff" }}>
        <Content style={{ margin: "16px" }}>
          {loading ? (
            <Spin />
          ) : (
            <Row gutter={[16, 16]}>
              {dogs.map((dog) => (
                <Col key={dog.id} xs={24} sm={12} md={8} lg={6}>
                  <DogCard dog={dog} />
                </Col>
              ))}
            </Row>
          )}

          {/* Pagination */}
          <CustomPagination
            total={total}
            pageSize={pageSize}
            current={currentPage}
            onChange={handlePageChange}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
