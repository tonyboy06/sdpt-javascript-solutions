let createRoot = document.getElementById("root");


let cardProfiles = [
  {
    name: "John Doe",
    title: "Software Engineer",
    description: "Experienced in full-stack development with a focus on JavaScript and Python.",
    image: "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
  },
  {
    name: "Jane Smith",
    title: "Data Scientist",
    description: "Specializes in machine learning, data analysis, and visualization using Python and R.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedUbGiEk42Uf-__kGiFVtkchMgDGySNTMowvphbyFNozLfEl9Somsl5IfTZCCnKMU4oQ&usqp=CAU"
  },
  {
    name: "Alice Johnson",
    title: "UX/UI Designer",
    description: "Passionate about creating user-friendly interfaces and enhancing user experiences.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9i_TGydENscgdrjVwNy_LMfZXDHuEMbPlJo29feYRU18m85QWTc9XukwEVWwG4vCVVg&usqp=CAU"
  },
  {
    name: "Michael Brown",
    title: "DevOps Engineer",
    description: "Expert in CI/CD pipelines, cloud infrastructure, and automation tools.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpHMbl1ZnqjQk424g6XDv3eMm8SiSDeQ-J-_k_xZD-T3HLnevCspMe5jOWIeESmT4Ctg&usqp=CAU"
  }
];

createRoot.innerHTML = "";

for (let i = 0; i < cardProfiles.length; i++) {
  const card = `
    <div class="card">
      <img src="${cardProfiles[i].image}" alt="${cardProfiles[i].name}" />
      <h2>${cardProfiles[i].name}</h2>
      <h3>${cardProfiles[i].title}</h3>
      <p>${cardProfiles[i].description}</p>
    </div>
  `;
  createRoot.innerHTML += card;
}
