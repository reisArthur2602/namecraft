import { Sidebar } from '../../components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[240px_1fr] flex-1 ">
            <Sidebar />
            <main className="flex flex-1 flex-col overflow-hidden">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
