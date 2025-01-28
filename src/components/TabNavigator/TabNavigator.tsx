export const TabNavigator = ({ tabs, activeTab, setActiveTab } : {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) => {
    return (
        <div className="tab-navigator">
        {tabs.map((tab, index) => (
            <button
            key={index}
            className={`tab-navigator-button ${
                tab === activeTab ? "tab-navigator-button-active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
            >
            {tab}
            </button>
        ))}
        </div>
    );
    };