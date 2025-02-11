import { FaGithub } from "react-icons/fa";

const ProjectData = [
    {
        bannerUrl: "https://placehold.co/600x400",
        title: "B2C",
        description: "B2C modeline dayalı bir e-ticaret platformunun tasarımı ve geliştirilmesi. Kullanıcı dostu bir arayüzle, ürünler ve ödeme süreçleri yönetilerek, online alışveriş deneyimi sağlanmıştır.",
        technologies: ["React", "Node.js", "MySQL"],
        links: [
        ]
    },
    {
        bannerUrl: "https://placehold.co/600x400",
        title: "Sanal Sözlük",
        description: "Türk Dil Kurumu'nun (TDK) resmi sözlüğüne dayanan ve anlık kelime arama sonuçlarını kullanıcıya sunan bir arama motoru uygulaması. Kullanıcılar, istedikleri kelimeleri girerek tanımları hızlıca öğrenebilirler.",
        technologies: ["Python", "Pandas"],
        links: [
            {
                isDefault: true,
                name: "GitHub",
                Logo: <FaGithub />,
                url: "https://github.com/hakankygsz/TdkDictionary"
            }
        ]
    },
    {
        bannerUrl: "https://placehold.co/600x400",
        title: "Yapay Zeka Paketi",
        description: "Yüz tanıma, el tanıma, plaka tanıma gibi bilgisayarla görme ve yapay zeka uygulamalarını içeren bir yazılım paketi. Gelişmiş görüntü işleme teknikleri ile güvenlik ve otomasyon sistemlerine entegre edilebilir.",
        technologies: ["Python", "OpenCV"],
        links: [
            {
                isDefault: true,
                name: "GitHub",
                Logo: <FaGithub />,
                url: "https://github.com/hakankygsz/Artificial-Intelligence-Pack"
            }
        ]
    }
];

export default ProjectData;