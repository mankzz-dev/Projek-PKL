import team1 from "../assets/images/Team/team1.jpg";
import team2 from "../assets/images/Team/team2.jpg";
import team3 from "../assets/images/Team/team3.jpg";
import team4 from "../assets/images/Team/team4.jpg";

export default function Team() {
    const teamMembers = [
        {
            name: "Rizky Pratama",
            role: "CEO & Founder",
            image: team1,
        },
        {
            name: "Nadia Putri",
            role: "Head of Design",
            image: team2,
        },
        {
            name: "Fahmi Ananda",
            role: "Lead Developer",
            image: team3,
        },
        {
            name: "Siti Rahma",
            role: "Marketing Specialist",
            image: team4,
        }
    ];

    return (
        <section id="team" className="py-16 bg-white text-gray-900 transition-all duration-500">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Tim Kami</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Kenali para profesional di balik PT Dapanel Digital Kreatif yang berdedikasi untuk inovasi dan kreativitas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center border-2 border-gray-300 transform hover:scale-105 transition duration-300">
                            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                            <h3 className="text-2xl font-semibold text-blue-600">{member.name}</h3>
                            <p className="text-gray-500 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}