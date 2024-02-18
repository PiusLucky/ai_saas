import Profile from "./profile/page";

const Home = async ({ searchParams }: SearchParamProps) => {
  return (
    <>
      <section className="sm:mt-12">
        <Profile
          searchParams={searchParams}
          params={{
            id: "",
            type: "remove",
          }}
        />
      </section>
    </>
  );
};

export default Home;
