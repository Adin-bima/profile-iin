let fabOpen = false;
  let currentLang = 'id';

  const translations = {
    id: {
      subtitle: 'Tenaga Pendidik Profesional',
      sectionSummary: 'Ringkasan Profesional',
      sectionWork: 'Pengalaman Kerja',
      sectionOrg: 'Pengalaman Organisasi',
      sectionEdu: 'Pendidikan',
      sectionLang: 'Bahasa',
      sectionSkill: 'Keterampilan',
      summary: 'Seorang tenaga pendidik profesional dengan latar belakang S1 Pendidikan Guru Madrasah Ibtidaiyah (IPK 3.91, Cum Laude) dan S2 Manajemen Pendidikan Islam dari UIN Mataram (IPK 3.92, Cum Laude). Memiliki pengalaman mengajar langsung di SDN Abata Lombok serta sebagai guru les privat. Berdedikasi tinggi dalam menciptakan lingkungan belajar yang kondusif, inovatif, dan menyenangkan. Mampu berkomunikasi dengan baik, bekerja secara kolaboratif, serta berkomitmen untuk terus berkembang dalam dunia pendidikan.',
      job1Company: 'SDN Abata Lombok',
      job1Period: '2024 – Sekarang',
      job1Role: 'Guru Kelas',
      job1Duties: [
        'Menyusun rencana pelaksanaan pembelajaran (RPP) sesuai kurikulum yang berlaku.',
        'Melaksanakan kegiatan belajar mengajar di kelas secara efektif dan interaktif.',
        'Melakukan evaluasi dan penilaian hasil belajar siswa secara berkala.',
        'Membimbing siswa dalam pengembangan karakter dan kedisiplinan.',
        'Berkoordinasi dengan orang tua siswa terkait perkembangan belajar anak.'
      ],
      job2Company: 'Les Privat',
      job2Period: '2023 – 2024',
      job2Role: 'Guru Les Privat',
      job2Duties: [
        'Memberikan bimbingan belajar secara individual sesuai kebutuhan siswa.',
        'Menyesuaikan metode pengajaran dengan kemampuan dan gaya belajar siswa.',
        'Membantu siswa memahami materi pelajaran yang sulit di sekolah.',
        'Memantau perkembangan belajar siswa dan melaporkan hasilnya kepada orang tua.'
      ],
      orgs: [
        { year: '2020–2021', role: 'Sekretaris HMPS PGMI' },
        { year: '2020–2021', role: 'BEM Universitas – Kabinet Binekantunggal Ika' },
        { year: '2021–2022', role: 'BEM Universitas – Kabinet Harmoni Juang' },
        { year: '2021', role: 'DAD Ikatan Mahasiswa Muhammadiyah' },
        { year: '2022–2023', role: 'BEM Fakultas Agama Islam' },
      ],
      edu: [
        { school: 'UIN Mataram', detail: 'S2 Manajemen Pendidikan Islam', year: '2024–2025 · IPK 3.92 (Cum Laude)' },
        { school: 'Universitas Muhammadiyah Mataram', detail: 'S1 Pendidikan Guru Madrasah Ibtidaiyah', year: '2019–2023 · IPK 3.91 (Cum Laude)' },
        { school: 'SMA Negeri 1 Bolo', detail: '', year: '2016–2019' },
        { school: 'SMP Negeri 1 Bolo', detail: '', year: '2013–2016' },
        { school: 'SDN Inpres Rato', detail: '', year: '2007–2013' },
      ],
      langItems: [
        { name: 'Indonesia', filled: 5 },
        { name: 'Inggris', filled: 3 },
      ],
      skills: ['Kurikulum Merdeka & K-13','Student-Centered Learning','Penyusunan Perangkat Pembelajaran','Evaluasi & Penilaian Siswa','Manajemen Kelas','Komunikasi Interpersonal','Pengembangan Karakter Islami'],
      toastPDF: 'Menyiapkan PDF...', toastPDFDone: 'PDF berhasil diunduh!',
      toastImg: 'Menyiapkan gambar...', toastImgDone: 'Gambar berhasil diunduh!',
      downloadImg: 'Download Gambar',
    },
    en: {
      subtitle: 'Professional Educator',
      sectionSummary: 'Professional Summary',
      sectionWork: 'Work Experience',
      sectionOrg: 'Organizational Experience',
      sectionEdu: 'Education',
      sectionLang: 'Languages',
      sectionSkill: 'Skills',
      summary: 'A dedicated professional educator with a Bachelor\'s degree in Madrasah Ibtidaiyah Teacher Education (GPA 3.91, Cum Laude) and a Master\'s degree in Islamic Education Management from UIN Mataram (GPA 3.92, Cum Laude). Experienced in classroom teaching at SDN Abata Lombok and private tutoring. Highly committed to creating a conducive, innovative, and engaging learning environment. Strong communicator, collaborative team player, and driven to continuously grow within the field of education.',
      job1Company: 'SDN Abata Lombok',
      job1Period: '2024 – Present',
      job1Role: 'Classroom Teacher',
      job1Duties: [
        'Developing lesson plans (RPP) aligned with the applicable national curriculum.',
        'Conducting effective and interactive classroom teaching sessions.',
        'Conducting regular assessments and evaluations of student learning outcomes.',
        'Guiding students in character development and discipline.',
        'Coordinating with parents regarding student progress and development.'
      ],
      job2Company: 'Private Tutoring',
      job2Period: '2023 – 2024',
      job2Role: 'Private Tutor',
      job2Duties: [
        'Providing personalized one-on-one tutoring tailored to each student\'s needs.',
        'Adapting teaching methods to suit individual learning styles and abilities.',
        'Helping students grasp difficult school subjects with clarity.',
        'Monitoring student progress and regularly reporting to parents.'
      ],
      orgs: [
        { year: '2020–2021', role: 'Secretary of HMPS PGMI' },
        { year: '2020–2021', role: 'University Student Senate – Binekantunggal Ika Cabinet' },
        { year: '2021–2022', role: 'University Student Senate – Harmoni Juang Cabinet' },
        { year: '2021', role: 'DAD of Muhammadiyah Student Association' },
        { year: '2022–2023', role: 'Faculty of Islamic Studies Student Senate' },
      ],
      edu: [
        { school: 'UIN Mataram', detail: 'Master\'s – Islamic Education Management', year: '2024–2025 · GPA 3.92 (Cum Laude)' },
        { school: 'Universitas Muhammadiyah Mataram', detail: 'Bachelor\'s – Madrasah Ibtidaiyah Teacher Education', year: '2019–2023 · GPA 3.91 (Cum Laude)' },
        { school: 'SMA Negeri 1 Bolo', detail: 'Senior High School', year: '2016–2019' },
        { school: 'SMP Negeri 1 Bolo', detail: 'Junior High School', year: '2013–2016' },
        { school: 'SDN Inpres Rato', detail: 'Elementary School', year: '2007–2013' },
      ],
      langItems: [
        { name: 'Indonesian', filled: 5 },
        { name: 'English', filled: 3 },
      ],
      skills: ['Merdeka & K-13 Curriculum','Student-Centered Learning','Lesson Plan Development','Student Assessment & Evaluation','Classroom Management','Interpersonal Communication','Islamic Character Education'],
      toastPDF: 'Preparing PDF...', toastPDFDone: 'PDF downloaded successfully!',
      toastImg: 'Preparing image...', toastImgDone: 'Image downloaded successfully!',
      downloadImg: 'Download Image',
    }
  };

  function toggleLang() {
    setLang(currentLang === 'id' ? 'en' : 'id');
  }

  function setLang(lang) {
    currentLang = lang;
    document.getElementById('langLabel').textContent = lang === 'id' ? 'EN' : 'ID';
    const t = translations[lang];

    // Header
    document.querySelector('.header-info .subtitle').textContent = t.subtitle;

    // Section titles (main)
    const mainTitles = document.querySelectorAll('.main-section-title');
    mainTitles[0].childNodes[mainTitles[0].childNodes.length - 1].textContent = ' ' + t.sectionSummary;
    mainTitles[1].childNodes[mainTitles[1].childNodes.length - 1].textContent = ' ' + t.sectionWork;
    mainTitles[2].childNodes[mainTitles[2].childNodes.length - 1].textContent = ' ' + t.sectionOrg;

    // Sidebar section titles
    const sideTitles = document.querySelectorAll('.section-title');
    sideTitles[0].textContent = t.sectionEdu;
    sideTitles[1].textContent = t.sectionLang;
    sideTitles[2].textContent = t.sectionSkill;

    // Summary
    document.querySelector('.summary-text').textContent = t.summary;

    // Jobs
    const jobs = document.querySelectorAll('.job-item');
    [0,1].forEach(i => {
      const key = i === 0 ? 'job1' : 'job2';
      jobs[i].querySelector('.job-company').textContent = t[key+'Company'];
      jobs[i].querySelector('.job-period').textContent = t[key+'Period'];
      jobs[i].querySelector('.job-role').textContent = t[key+'Role'];
      const ul = jobs[i].querySelector('.job-responsibilities');
      ul.innerHTML = t[key+'Duties'].map(d => `<li>${d}</li>`).join('');
    });

    // Orgs
    const orgItems = document.querySelectorAll('.org-item');
    t.orgs.forEach((o, i) => {
      if (orgItems[i]) {
        orgItems[i].querySelector('.org-year').textContent = o.year;
        orgItems[i].querySelector('.org-role').textContent = o.role;
      }
    });

    // Education
    const eduItems = document.querySelectorAll('.edu-item');
    t.edu.forEach((e, i) => {
      if (eduItems[i]) {
        eduItems[i].querySelector('.edu-school').textContent = e.school;
        const det = eduItems[i].querySelector('.edu-detail');
        if (det) det.textContent = e.detail;
        eduItems[i].querySelector('.edu-year').textContent = e.year;
      }
    });

    // Languages
    const langItems = document.querySelectorAll('.lang-item');
    t.langItems.forEach((l, i) => {
      if (langItems[i]) langItems[i].querySelector('.lang-name').textContent = l.name;
    });

    // Skills
    const skillEls = document.querySelectorAll('.skill-item');
    t.skills.forEach((s, i) => { if (skillEls[i]) skillEls[i].textContent = s; });

    // Download button label
    document.getElementById('downloadImgBtn').childNodes[2].textContent = ' ' + t.downloadImg;
  }

  function toggleFab() {
    fabOpen = !fabOpen;
    document.getElementById('fabOptions').classList.toggle('open', fabOpen);
    document.getElementById('fabMain').classList.toggle('open', fabOpen);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  async function downloadPDF() {
    toggleFab();
    const t = translations[currentLang];
    showToast(t.toastPDF);
    const { jsPDF } = window.jspdf;
    const cv = document.getElementById('cv');
    const canvas = await html2canvas(cv, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (canvas.height * pdfW) / canvas.width;
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH);
    pdf.save('CV_St_Mutmainah.pdf');
    showToast(t.toastPDFDone);
  }

  async function downloadImage() {
    toggleFab();
    const t = translations[currentLang];
    showToast(t.toastImg);
    const cv = document.getElementById('cv');
    const canvas = await html2canvas(cv, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const link = document.createElement('a');
    link.download = 'CV_St_Mutmainah.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(t.toastImgDone);
  }
