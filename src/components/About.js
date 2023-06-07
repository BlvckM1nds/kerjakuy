import React from "react";

const About = () => {
  return(
    <div className="bg-gradient-to-r from-sky-50 to-sky-200 text-center py-[10%] px-[5%]">
      <div className="h-60 w-60 rounded-full overflow-hidden m-auto shadow-lg hover:shadow-xl max-md:h-48 max-md:w-48 max-sm:h-36 max-sm:w-36">
        <a href="/" target="_blank">
          <img src="../android-chrome-512x512.png" className="object-cover h-full w-full"/>
        </a>
      </div>
      <div className="mt-7 max-w-5xl m-auto max-sm:mt-5">
        <h1 className="font-semibold text-3xl mb-5 max-md:text-2xl max-sm:text-xl max-sm:mb-3">Apa itu <a href="/" className="text-sky-600 hover:underline"><span className="font-bold text-sky-600">KerjaKuy</span></a>? Siapa dibaliknya?</h1>
        <p className="text-lg leading-relaxed max-md:text-base max-sm:text-sm max-sm"><a href="/" className="text-sky-600 hover:underline"><span className="font-semibold">KerjaKuy</span></a> merupakan situs web yang menyajikan lebih dari ribuan lowongan pekerjaan di seluruh penjuru Indonesia. Situs ini diluncurkan pada tahun 2022 oleh seorang mahasiswa yang juga merupakan peserta <em>intesive bootcamp</em> SanberCode <em>batch</em> 40, <a href="https://www.linkedin.com/in/ryualvano" className="text-sky-600 hover:underline"><span className="font-semibold">Ryu Alvano</span></a>. <a href="/" className="text-sky-600 hover:underline"><span className="font-semibold">KerjaKuy</span></a> memiliki visi dan misi yang tertuju pada pada pembekalan semua informasi terkait lowongan pekerjaan di seluruh Indonesia bagi yang membutuhkan dengan harapan para <em>job-seeker</em> dapat menemukan berbagai kesempatan menggeluti pengalaman di lingkup profesional.</p>
      </div>
    </div>
  )
}

export default About;