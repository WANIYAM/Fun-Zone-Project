// carousel
const texts = ["5 record breaking rides", "Exciting roller coasters", "Fun for the whole family"];

// swiper carousel
const images = [
    { src: "index-carousel1.jpg", alt: "Slide 1" },
    { src: "index-carousel2.jpg", alt: "Slide 2" },
    { src: "index-carousel3.jpg", alt: "Slide 3" },
    { src: "index-carousel4.jpg", alt: "Slide 4" },
    { src: "index-carousel5.jpg", alt: "Slide 5" }
  ];

// brands
const brands = [
    { name: "Disney", img: "disney.png" },
    { name: "Universal Studios", img: "universal.png" },
    { name: "Six Flags", img: "sixflags.png" },
    { name: "Ferrari World", img: "ferrari.png" },
    { name: "LEGO", img: "lego.png" },
    { name: "Coca-Cola", img: "coca-cola.png" },
    { name: "McDonald's", img: "mcdonalds.png" },
    { name: "Pepsi", img: "pepsi.png" },
    { name: "Nike", img: "nike.png" },
    { name: "Netflix", img: "netflix.png" }
  ];

//   reviews

const testimonials = [
    { name: "Emily Carter", role: "Theme Park Enthusiast", image: "https://example.com/avatar1.jpg", rating: 5, feedback: "Rollercoasters are absolutely thrilling!Best amusement park experience ever!" },
    { name: "Jake Thompson", role: "Father of Two", image: "https://example.com/avatar2.jpg", rating: 5, feedback: "Perfect family getaway! The kids loved every ride, and the staff was amazing." },
    { name: "Sophia Reyes", role: "Adventurer", image: "https://example.com/avatar3.jpg", rating: 4, feedback: "So many exciting rides! The food options were great too. Can't wait to visit again." },
    { name: "Michael Johnson", role: "Annual Pass Holder", image: "https://example.com/avatar4.jpg", rating: 5, feedback: "I visit every year, and it keeps getting better! The new water ride is incredible!" },
    { name: "Lisa Brown", role: "Thrill Seeker", image: "https://example.com/avatar5.jpg", rating: 5, feedback: "Best theme park ever! From the rides to the shows, everything was top-notch!" },
    { name: "David Wilson", role: "First-Time Visitor", image: "https://example.com/avatar6.jpg", rating: 4, feedback: "Amazing experience! The Ferris wheel view was breathtaking." },
    { name: "Olivia Martinez", role: "Food Lover", image: "https://example.com/avatar7.jpg", rating: 5, feedback: "The food court had so many delicious options. The funnel cake was my favorite!" },
    { name: "Ryan Parker", role: "Water Park Fan", image: "https://example.com/avatar8.jpg", rating: 5, feedback: "The water slides were insane! Definitely coming back in the summer." },
    { name: "Samantha Lee", role: "Teenager", image: "https://example.com/avatar9.jpg", rating: 4, feedback: "Loved the haunted house and VR rides! Best day ever!" },
    { name: "Chris Evans", role: "Grandfather", image: "https://example.com/avatar10.jpg", rating: 5, feedback: "Brought my grandkids here, and they had the time of their lives!" },
];

const rides = [
    { id: 1, name: "Roller Coaster", category: "thrill", image: "assets/images/ride1.jpg", video: "assets/videos/ride vd1.mp4", description: "Experience the ultimate thrill with our high-speed roller coaster!", ticket: "10", height: "48 inches", age: "10+", duration: "2 minutes", safety: "Secure all loose items before riding." },
    { id: 2, name: "Ferris Wheel", category: "major", image: "assets/images/ride2.jpg", video: "assets/videos/ride vd2.mp4", description: "Enjoy a breathtaking view of the entire park from the top.", ticket: "8 ", height: "No restriction", age: "All ages", duration: "5 minutes", safety: "Remain seated during the ride." },
    { id: 3, name: "Drop Tower", category: "thrill", image: "assets/images/ride3.jpg", video: "assets/videos/ride vd3.mp4", description: "Feel the adrenaline rush as you plunge from great heights!", ticket: "12", height: "42 inches", age: "12+", duration: "1 minute", safety: "Keep arms and legs inside the ride." },
    { id: 4, name: "Bumper Cars", category: "major", image: "assets/images/ride4.jpg", video: "assets/videos/ride vd4.mp4", description: "Crash and bump your friends in this fun-filled ride!", ticket: "7 ", height: "No restriction", age: "All ages", duration: "3 minutes", safety: "Wear seatbelts at all times." },
    { id: 5, name: "Log Flume", category: "aqua", image: "assets/images/ride5.jpg", video: "assets/videos/ride vd5.mp4", description: "Splash down the river on a thrilling log ride!", ticket: "9 ", height: "40 inches", age: "8+", duration: "4 minutes", safety: "Secure all loose items before riding." },
    { id: 6, name: "Haunted House", category: "major", image: "assets/images/ride6.jpg", video: "assets/videos/ride vd6.mp4", description: "Dare to enter the haunted house and face your fears!", ticket: "10", height: "No restriction", age: "10+", duration: "5 minutes", safety: "Not recommended for those with heart conditions." },
    { id: 7, name: "Merry-Go-Round", category: "major", image: "assets/images/ride7.jpg", video: "assets/videos/ride vd7.mp4", description: "A classic ride for all ages, featuring beautifully painted horses.", ticket: "5 ", height: "No restriction", age: "All ages", duration: "3 minutes", safety: "Remain seated during the ride." },
    { id: 8, name: "Swinging Ship", category: "thrill", image: "assets/images/ride8.jpg", video: "assets/videos/ride vd8.mp4", description: "Feel the wind in your hair as you swing back and forth!", ticket: "11", height: "42 inches", age: "10+", duration: "2 minutes", safety: "Keep arms and legs inside the ride." },
    { id: 9, name: "Virtual Reality Coaster", category: "thrill", image: "assets/images/ride9.jpg", video: "assets/videos/ride vd9.mp4", description: "Experience a roller coaster like never before with immersive VR technology!", ticket: "15n", height: "48 inches", age: "12+", duration: "3 minutes", safety: "Secure VR headset before riding." },
    { id: 10, name: "Kiddie Train", category: "kids", image: "assets/images/ride10.jpg", video: "assets/videos/ride vd10.mp4", description: "A gentle ride perfect for the little ones to enjoy!", ticket: "6 ", height: "No restriction", age: "All ages", duration: "4 minutes", safety: "Children must be accompanied by an adult." },
    { id: 11, name: "Tea Cups", category: "kids", image: "assets/images/ride11.jpg", video: "assets/videos/ride vd11.mp4", description: "Spin around in colorful tea cups for a whimsical experience!", ticket: "7 ", height: "No restriction", age: "All ages", duration: "3 minutes", safety: "Remain seated during the ride." },
    { id: 12, name: "Sky Ride", category: "major", image: "assets/images/ride12.jpg", video: "assets/videos/ride vd12.mp4", description: "Glide above the park and take in the stunning views!", ticket: "9 ", height: "No restriction", age: "All ages", duration: "5 minutes", safety: "Keep arms and legs inside the ride." },
    { id: 13, name: "Wave Pool", category: "aqua", image: "assets/images/ride13.jpg", video: "assets/videos/ride vd13.mp4", description: "Enjoy the beach vibes with our exciting wave pool!", ticket: "12", height: "No restriction", age: "All ages", duration: "All day", safety: "Supervision required for children." },
    { id: 14, name: "Zip Line", category: "thrill", image: "assets/images/ride14.jpg", video: "assets/videos/ride vd14.mp4", description: "Soar through the air and feel the rush of flying!", ticket: "20", height: "54 inches", age: "12+", duration: "1 minute", safety: "Wear harness securely." },
    { id: 15, name: "Spinning Coaster", category: "thrill", image: "assets/images/ride15.jpg", video: "assets/videos/ride vd15.mp4", description: "A unique coaster that spins you around while you race through the track!", ticket: "13", height: "48 inches", age: "10+", duration: "2 minutes", safety: "Keep arms and legs inside the ride." },
    { id: 16, name: "Rock Climbing Wall", category: "major", image: "assets/images/ride16.jpg", video: "assets/videos/ride vd16.mp4", description: "Challenge yourself on our indoor rock climbing wall!", ticket: "10", height: "No restriction", age: "All ages", duration: "5 minutes", safety: "Harness must be worn at all times." },
    { id: 17, name: "Kiddie Carousel", category: "kids", image: "assets/images/ride17.jpg", video: "assets/videos/ride vd17.mp4", description: "A smaller carousel designed just for the little ones!", ticket: "5 ", height: "No restriction", age: "All ages", duration: "3 minutes", safety: "Children must be accompanied by an adult." },
    { id: 18, name: "Obstacle Course", category: "major", image: "assets/images/ride18.jpg", video: "assets/videos/ride vd118.mp4", description: "Test your agility and speed in our fun obstacle course!", ticket: "8 ", height: "No restriction", age: "All ages", duration: "5 minutes", safety: "Follow the course rules." },
    { id: 19, name: "Flying Elephants", category: "kids", image: "assets/images/ride19.jpg", video: "assets/videos/ride vd20.mp4", description: "Fly high on colorful elephants that go up and down!", ticket: "7 ", height: "No restriction", age: "All ages", duration: "3 minutes", safety: "Remain seated during the ride." }
];



const experience = [
    {
        name: "7 Wonders of the World Zone",
        description: "Travel the World in a Single Day!",
        imageUrl: "assets/images/7-wonders-of-the-World-Zone.avif",
        link: "7-wonders.html"
    },
    {
        name: "Water World Zone",
        description: "Dive into an aquatic adventure with wave pools, thrilling water slides, and a lazy river for ultimate relaxation!",
        imageUrl: "assets/images/water-zone.jpg",
        link: "waterzone.html"
    },
    {
        name: "Rides Zone",
        description: "Heart-Pounding Action for Adrenaline Junkies!",
        imageUrl: "assets/images/thrill-rides.jpg",
        link: "rides.html"
    },
    {
        name: "Wild Safari Zone",
        description: "Embark on an exciting journey through the wild, featuring exotic animals, thrilling jungle rides, and an immersive safari experience!",
        imageUrl: "assets/images/Wild-Safari-Zone.jpg",
        link: "wild-safari.html"
    },
    {
        name: "Fantasy Kingdom Zone",
        description: "A Magical World for Kids and Families!",
        imageUrl: "assets/images/7-wonders.jpeg",
        link: "fantasy-kingdom.html"
    },
    {
        name: "Shopping Zone",
        description: "Explore a variety of souvenir shops, themed merchandise, and exclusive collectibles to take home a piece of the Fun Zone magic!",
        imageUrl: "assets/images/Shopping-Zone.jpg",
        link: "shoppingzone.html"
    },
    {
        name: "Mascots & Characters",
        description: "Meet our fun-loving park mascots who make every visit special with performances and greetings!",
        imageUrl: "assets/images/Mascots-&-Characters.jpg",
        link: "mascots.html"
    },
    {
        name: "Food & Leisure",
        description: "Refuel with delicious meals, refreshing drinks, and international cuisines at our grand food court.",
        imageUrl: "assets/images/Food-&-Leisure.jpg",
        link: "leisure.html"
    }
];

// map

const sections = [
    { id: "7wonders", name: "HUBZONE" },
    { id: "waterworld", name: "AQUAZONE" },
    { id: "thrillrides", name: "RIDES" },
    { id: "wildsafari", name: "SAFARI" },
    { id: "fantasy", name: "FANTASY" },
    { id: "shopping", name: "SHOP" },
    { id: "mascots", name: "MSCOTMANIA" },
    { id: "food", name: "FLAVOR" },
    ,
];

// waterzone


