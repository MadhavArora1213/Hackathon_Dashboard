import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

// Updated data to represent student enrollments, applications, and disbursements per month
const studentData = [
	{ name: "Jul", students: 120, applications: 100, disbursements: 80 },
	{ name: "Aug", students: 150, applications: 130, disbursements: 90 },
	{ name: "Sep", students: 180, applications: 160, disbursements: 110 },
	{ name: "Oct", students: 210, applications: 190, disbursements: 150 },
	{ name: "Nov", students: 230, applications: 210, disbursements: 170 },
	{ name: "Dec", students: 250, applications: 230, disbursements: 190 },
	{ name: "Jan", students: 270, applications: 250, disbursements: 210 },
	{ name: "Feb", students: 290, applications: 270, disbursements: 230 },
	{ name: "Mar", students: 320, applications: 300, disbursements: 260 },
	{ name: "Apr", students: 340, applications: 320, disbursements: 280 },
	{ name: "May", students: 360, applications: 340, disbursements: 300 },
	{ name: "Jun", students: 400, applications: 360, disbursements: 330 },
];

const StudentOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Monthly Overview: Applications and Disbursements</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={studentData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend verticalAlign="top" align="center" />

						{/* Line for Student Enrollments */}
						<Line
							type='monotone'
							dataKey='students'
							stroke='#10B981'
							strokeWidth={3}
							dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>

						{/* Line for Applications */}
						<Line
							type='monotone'
							dataKey='applications'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>

						{/* Line for Disbursements */}
						<Line
							type='monotone'
							dataKey='disbursements'
							stroke='#F59E0B'
							strokeWidth={3}
							dot={{ fill: "#F59E0B", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default StudentOverviewChart;
