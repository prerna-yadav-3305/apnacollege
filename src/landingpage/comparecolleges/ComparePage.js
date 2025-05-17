import React from "react";
import { Card, CardContent } from '../../components/ui/card';
import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";
import Navbar from "../home/Navbar";
import Footer from "../Footer";

const ComparePage = () => {
  return (
     <>
    <Navbar />
    <div className="p-4 space-y-6">
      <div className="bg-yellow-100 rounded-2xl p-4 shadow-md">
        <h2 className="text-xl font-semibold">College Compare</h2>
        <p>
          Compare up to 4 colleges based on your preferred course and get comparison on their ranks, fees, placements, seats, infrastructure and various other details
        </p>
      </div>

      {/* Search Section */}
      <div className="grid grid-cols-4 gap-4">
     
       
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="text-center">
            <CardContent className="p-4 space-y-2">
              <Input placeholder="Add a College" icon={<Search />} />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Category</th>
              <th className="p-2">--</th>
              <th className="p-2">-</th>
              <th className="p-2">-</th>
              <th className="p-2">-</th>
            </tr>
          </thead>
          <tbody>
           
            <tr><td className="p-2 font-semibold">Ranked by NIRF</td><td className="p-2">4</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2 font-bold" colSpan={5}>College Placement</td></tr>
            <tr><td className="p-2">B.E / B.Tech</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">B.Tech M.Tech</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">M.E / M.Tech</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">MBA</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2 font-bold" colSpan={5}>College Details</td></tr>
            <tr><td className="p-2">Estd Date</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Ownership</td><td className="p-2">Public/Government</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Campus Size</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Total Students Intake</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Total Enrollment</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Total Faculty</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2 font-bold" colSpan={5}>College Facilities</td></tr>
            <tr><td className="p-2">Boys Hostel</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Girls Hostel</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Wi-Fi Campus</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Gym</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Cafeteria</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Library</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2">Hospital/Medical</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2 font-bold" colSpan={5}>Courses Offered</td></tr>
            <tr><td className="p-2">B.E / B.Tech</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
            <tr><td className="p-2 font-bold" colSpan={5}>College Reviews</td></tr>
            <tr><td className="p-2">Student Reviews</td><td className="p-2">--</td><td colSpan={3}>-</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ComparePage;