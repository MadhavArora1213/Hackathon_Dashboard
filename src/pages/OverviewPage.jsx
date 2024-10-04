import { CircleCheckBig, ShoppingBag, Users, Zap, X, DollarSign } from "lucide-react"; // Import DollarSign icon for financial stats
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/StudentOverviewChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{/* Existing Stats */}
					<StatCard name='Total Applications' icon={Zap} value='2488' color='#6366F1' />
					<StatCard name='Approved Applications' icon={CircleCheckBig} value='1,834' color='green' />
					<StatCard name='Pending Applications' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard name='Rejected Applications' icon={X} value='87' color='red' />
					
					{/* New Financial Stats */}
					<StatCard name='Total Funds Allocated' icon={DollarSign} value='$5,000,000' color='#10B981' />
					<StatCard name='Funds Disbursed' icon={DollarSign} value='$3,400,000' color='#6366F1' />
					<StatCard name='Pending Disbursements' icon={DollarSign} value='$1,600,000' color='#F59E0B' />
				</motion.div>

				{/* CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};

export default OverviewPage;
