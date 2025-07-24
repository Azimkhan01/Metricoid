const getData = (req, res) => {
  return   res.json({"data": [
        {
            initials: "DL",
            name: "Dwain Littrell",
            email: "dlittrell1@pcworld.com",
            address: "952 Magdeline Trail",
            phone: "904-118-9004",
            website: "feedspan.com",
            company: {
                name: "Feedspan",
                tagline: "Nisi excepteur ad conse...",
            },
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            initials: "JD",
            name: "John Doe",
            email: "john_doe@gmail.com",
            address: "86 Cramlin str, Idaho, PL, 02928",
            phone: "(293) 441-8015",
            website: "wagner.com",
            company: {
                name: "Wagner LLC",
                tagline: "Nisi excepteur ad conse...",
            },
            image: null // No image, show initials
        }]})
}

module.exports = {getData}