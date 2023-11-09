import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed bg-[#0E0E23] md:inset-y-0 z-80">
        <Sidebar></Sidebar>
      </div>
      <main className="md:pl-72 pb-10  ">{children}</main>
    </div>
  );
};

export default DashboardLayout;

// bg-[#EAEDF7] h-full