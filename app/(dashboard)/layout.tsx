import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full xl:flex xl:flex-col xl:w-72 xl:fixed bg-[#0E0E23] xl:inset-y-0 z-80">
        <Sidebar></Sidebar>
      </div>
      <main className="pl-0 xl:pl-72 pb-10  ">{children}</main>
    </div>
  );
};

export default DashboardLayout;
