export default function Experience() {
  const summary = [
    {
      year: '2023–2026',
      title: 'Sekolah Menengah atas dan Sederajat',
      sub: 'SMK Bina Mandiri Multimedia',
      desc: 'Saya bersekolah di SMK Bina Mandiri Multimedia saat saya di jenjang Sekolah Menengah Atas/Sederajat.',
    },
    {
      year: '2020–2023',
      title: 'Sekolah Menengah Pertama',
      sub: 'SMP Negeri 4 Cileungsi',
      desc: 'Saya bersekolah di SMP Negeri 4 Cileungsi pada jenjang SMP/Sederajat. Pada jenjang ini Alhamdulillah saya hampir hadir setiap hari saat KBM dilaksanakan. Saya juga terkadang di ikut sertakan menjadi peserta lomba seperti lomba Adzan pada tingkat kecamatan.',
    },
    {
      year: '2014–2020',
      title: 'Sekolah Dasar',
      sub: 'SDIT Cikal Cendekia',
      desc: 'Saya bersekolah di SDIT Cikal Cendekia pada jenjang SD/Sederajat. Pada jenjang ini Alhamdulillah saya selalu mendapatkan peringkat 1 atau 2 setiap tahunnya. Saya juga meraih Peringkat/Juara pertama seangkatan saat kelulusan. Lalu saya juga sering mengikuti lomba O2SN.',
    },
  ];

  const experience = [
    {
      year: '2023–2024',
      title: 'Anggota OSIS',
      sub: 'OSIS SMK Bina Mandiri Multimedia',
      desc: 'Saya menjabat sebagai Anggota seksi bidang bela negara. Disini saya menjalankan proker-proker yang ada.',
    },
    {
      year: '2024',
      title: 'Panitia Keamanan BM3 Championship',
      sub: 'BM3 Championship',
      desc: 'Saya bertugas sebagai panitia Keamanan BM3 Championship. Tugas saya yaitu mengamankan atau mengondisikan para supporter agar tidak terjadi kericuhan saat acara sedang berlangsung.',
    },
  ];

  return (
    <div className="bg-gray-100 pt-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Summary */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Summary</h2>
          <div className="border-l-4 border-gray-300 relative">
            {summary.map((item, idx) => (
              <div key={idx} className="mb-10 pl-6 relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-[-10px] top-1.5" />
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block mb-2 font-semibold">
                  {item.year}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-orange-500 text-sm font-semibold">{item.sub}</p>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Experience</h2>
          <div className="border-l-4 border-gray-300 relative">
            {experience.map((item, idx) => (
              <div key={idx} className="mb-10 pl-6 relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-[-10px] top-1.5" />
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block mb-2 font-semibold">
                  {item.year}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-orange-500 text-sm font-semibold">{item.sub}</p>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}