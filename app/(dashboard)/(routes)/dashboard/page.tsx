import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <p className="text-9xl font-semibold text-green-500">
        I am from dashbord
      </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
