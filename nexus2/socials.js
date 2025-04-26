document.addEventListener("DOMContentLoaded", function () {
    loadPosts();
});

// Pre-generated success stories
const successStories = [
    {
        name: "Amit Kapoor",
        profilePic: "https://i.pravatar.cc/50?img=3",
        content: "Just secured an incredible ₹5 Cr in funding for our AI-powered legal assistant startup! 🎉🚀 This marks a huge step forward in our mission to revolutionize the legal industry with cutting-edge artificial intelligence. With this funding, we’re set to scale, innovate, and bring even more efficiency to legal professionals everywhere. Exciting times ahead—this is just the beginning! Thank you to our investors, team, and supporters for believing in our vision. Let’s redefine the future of legal tech! 💡⚖️ #GameChanger #AI #LegalTech #Innovation",
        image: "https://m.economictimes.com/thumb/msid-113093930,width-1600,height-900,resizemode-4,imgsize-1272258/wtf-summit-1.jpg",
        likes: 123,
        comments: ["Congrats! 🎉", "Amazing achievement!"]
    },
    {
        name: "Sneha Rao",
        profilePic: "https://i.pravatar.cc/50?img=5",
        content: "Exciting news! 🌱 We’ve officially launched our green-tech company, dedicated to creating innovative and sustainable packaging solutions! 🌍✨ Our mission is to reduce waste, promote eco-friendly alternatives, and drive a greener future for businesses and consumers alike. With sustainability at the core of everything we do, we’re ready to make a lasting impact. Join us on this journey to a cleaner planet! 💚♻️ #GoGreen #SustainableFuture #EcoInnovation #GreenTech",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeWfvz8_UvSQD7_27IEw3_tnAyLPdCugYGA&s",
        likes: 98,
        comments: ["Inspiring work!", "Best wishes!"]
    },
    {
        name: "Arjun Shah",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s",
        content: "Thrilled to announce that we’ve secured funding from incredible angel investors! 🚀 This marks a pivotal moment in our journey, fueling our mission to innovate, scale, and disrupt the industry. Grateful for the trust and belief in our vision—this is just the beginning! Exciting times ahead! 🔥✨ #FundingSecured #AngelInvestors #NextBigThing #OnwardAndUpward",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6mxaJ3dP3klP3kWDkbEgl6/e61ad2f7d11060bb7c0e9c1c0489d99b/GettyImages-912920596.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
        likes: 98,
        comments: ["Inspiring work!", "Best wishes!"]
    }
];

// Function to add a new user post
function addPost() {
    const content = document.getElementById("postContent").value;
    if (!content) return;

    const post = {
        name: "Sarah Perez",
        profilePic: "https://i.pravatar.cc/50",
        content: "Huge milestone unlocked! 🚀 Thrilled to announce that I've secured funding from none other than Nikhil Kamath for my tech startup, Nexus! 💡 This investment fuels our vision to innovate, disrupt, and take Nexus to new heights. Grateful for the trust, support, and belief in our journey. The best is yet to come! 🔥✨ #Nexus #TechStartup #FundingSecured #Grateful #GameChanger",
        image: "https://www.ctuniversity.in/storage/Misc/CT-Misc-65a0dee64f55e1705041638.jpg",
        likes: 12,
        comments: []
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("postContent").value = "";
    loadPosts();
}

// Function to load posts
function loadPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add success stories first
    successStories.forEach(post => renderPost(post, postsContainer));

    // Add user-generated posts
    posts.forEach(post => renderPost(post, postsContainer));
}

// Function to render a post
function renderPost(post, container) {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
        <div class="post-header">
            <img src="${post.profilePic}" alt="Profile" class="profile-pic">
            <p><strong>${post.name}</strong></p>
        </div>
        <p>${post.content}</p>
        <img src="${post.image}" alt="Post Image" style="width:100%; border-radius: 10px;">
        <div class="actions">
            <span class="like-btn" onclick="likePost('${post.content}')">❤️ ${post.likes}</span>
            <span class="comment-btn" onclick="commentPost('${post.content}')">💬 Comment</span>
            <span class="share-btn">🔗 Share</span>
        </div>
        <div id="comments-${post.content.replace(/\s/g, '')}"></div>
    `;

    container.appendChild(div);
}

// Function to like a post
function likePost(content) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let post = posts.find(p => p.content === content);
    if (post) {
        post.likes += 1;
        localStorage.setItem("posts", JSON.stringify(posts));
        loadPosts();
    }
}

// Function to comment on a post
function commentPost(content) {
    const comment = prompt("Enter your comment:");
    if (!comment) return;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let post = posts.find(p => p.content === content);
    if (post) {
        post.comments.push(comment);
        localStorage.setItem("posts", JSON.stringify(posts));
        loadPosts();
    }
}
