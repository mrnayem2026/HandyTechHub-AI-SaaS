const AuthLayout = ({children} : { children: React.ReactNode}) => {
    return (
        <main className="h-full bg-[#0F0E0E] flex justify-center items-center">
           {children} 
        </main>
    );
};

export default AuthLayout;