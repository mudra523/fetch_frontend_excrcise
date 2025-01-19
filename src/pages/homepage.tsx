import React, { useEffect, useState } from "react";
import { Row, Col, Layout, Spin, message, Button } from "antd";
import Sidebar from "@/components/Sidebar";
import DogCard from "@/components/DogCard";
import BoxMatch from "@/components/BoxMatch";
import CustomPagination from "@/components/Pagination";
import { searchDogs, fetchDogsByIds, matchDogs } from "@/services/dogs";
import { Dog } from "@/utils/types";

const { Content } = Layout;

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [breed, setBreed] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [ageRange, setAgeRange] = useState<[number, number]>([1, 20]);
  const [sort, setSort] = useState("breed:asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const [dogs, setDogs] = useState<Dog[]>([]);

  const [breedList, setBreedList] = useState<string[]>([]);

  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [matchedDog, setMatchedDog] = useState<Dog | null>(null);
  const [loadingMatch, setLoadingMatch] = useState(false);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const res = await fetch(
        "https://frontend-take-home-service.fetch.com/dogs/breeds",
        { credentials: "include" }
      );
      if (!res.ok) {
        console.warn("Failed to fetch breed list");
        return;  
      }
      const data = await res.json();
      setBreedList(data);
    } catch (error) {
      console.error("Failed to fetch breeds", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [breed, zipCode, ageRange, sort, currentPage, pageSize]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await searchDogs({
        size: pageSize,
        from: (currentPage - 1) * pageSize,
        breeds: breed ? [breed] : undefined,
        zipCodes: zipCode ? [zipCode] : undefined,
        ageMin: ageRange[0],
        ageMax: ageRange[1],
        sort,
      });

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
    setCurrentPage(1);
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

  const handleToggleFavorite = (dogId: string) => {
    setFavoriteIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dogId)) {
        newSet.delete(dogId);
      } else {
        newSet.add(dogId);
      }
      return newSet;
    });
  };

  const handleGenerateMatch = async () => {
    if (favoriteIds.size === 0) {
      message.warning("You haven't favorited any dogs!");
      return;
    }

    try {
      setLoadingMatch(true);

      const matchId = await matchDogs(Array.from(favoriteIds));

      let foundDog = dogs.find((d) => d.id === matchId);
      if (!foundDog) {
        const [dogDetail] = await fetchDogsByIds([matchId]);
        foundDog = dogDetail;
      }

      setMatchedDog(foundDog || null);
      setIsMatchModalOpen(true);
    } catch (error) {
      console.error("Failed to generate match:", error);
      message.error("Could not generate match. Check console.");
    } finally {
      setLoadingMatch(false);
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #071e3d, #1f4287)",
      }}
    >
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

      <Layout style={{ background: "transparent" }}>
        <Content
          style={{
            margin: 16,
            borderRadius: 8,
            padding: 16,
            color: "#ffffff",
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            style={{
              marginBottom: 16,
              padding: "8px 16px",
              color: "#fff",
            }}
          >
            
            <Col>
              <div
                style={{
                  color: "#21e6c1",
                  fontSize: 16,
                  border: "none",
                }}
              >
                Favorite: {favoriteIds.size}
              </div>
            </Col>
            <Col>
              <Button
                onClick={handleGenerateMatch}
                loading={loadingMatch}
                style={{
                  backgroundColor: "#21e6c1",
                  borderColor: "#21e6c1",
                  color: "#071e3d",
                  fontWeight: "bold",
                }}
              >
                Generate Match
              </Button>
            </Col>
          </Row>

          {loading ? (
            <Spin style={{ marginTop: 24 }} />
          ) : (
            <Row gutter={[16, 16]}>
              {dogs.map((dog) => (
                <Col key={dog.id} xs={24} sm={6} md={6} lg={4}>
                  <DogCard
                    dog={dog}
                    isFavorite={favoriteIds.has(dog.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </Col>
              ))}
            </Row>
          )}

          <CustomPagination
            total={total}
            pageSize={pageSize}
            current={currentPage}
            onChange={handlePageChange}
          />
        </Content>

        <BoxMatch
          isModalOpen={isMatchModalOpen}
          matchedDog={matchedDog}
          onOk={() => setIsMatchModalOpen(false)}
          onCancel={() => setIsMatchModalOpen(false)}
        />
      </Layout>
    </Layout>
  );
};

export default HomePage;
