import React, { useState, useEffect } from "react";

const Postingsection = () => {
    const [postContent, setPostContent] = useState("");
    const [attachments, setAttachments] = useState([]);
    const [posts, setPosts] = useState([]);

    // Fetch posts on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5000/api/posts");
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const handlePost = async () => {
        const formData = new FormData();
        formData.append("postContent", postContent);
        attachments.forEach((file) => {
            formData.append("attachments", file);
        });

        try {
            const response = await fetch("http://localhost:5000/api/posts", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setPosts((prevPosts) => [
                    {
                        content: postContent,
                        images: data.files, // Assuming data.files contains the URLs
                        timestamp: new Date().toISOString(),
                    },
                    ...prevPosts,
                ]);
            } else {
                console.error("Error creating post:", await response.json());
            }
        } catch (error) {
            console.error("Error:", error);
        }

        // Reset form fields
        setPostContent("");
        setAttachments([]);
    };

    const handleAttachmentChange = (e) => {
        setAttachments([...attachments, ...Array.from(e.target.files)]);
    };

    return (
        <div className="w-full h-full flex flex-col p-4">
            {/* Posting Form */}
            <div className="mb-4 p-4 bg-gray-900 text-gray-300 shadow rounded">
                <h2 className="text-lg font-bold text-green-500">Post Something</h2>
                <textarea
                    className="w-full h-20 p-2 mt-2 bg-gray-800 text-gray-300 border border-green-500 rounded focus:outline-none"
                    placeholder="What's happening?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
                <div className="flex items-center mt-2 space-x-2">
                    <input
                        type="file"
                        multiple
                        onChange={handleAttachmentChange}
                        className="border border-green-500 bg-gray-800 text-gray-300 rounded py-2 px-4"
                    />
                    <button
                        onClick={handlePost}
                        className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-400 transition duration-200"
                    >
                        Post
                    </button>
                </div>
            </div>

            {/* Recent Posts Section */}
            <div className="flex flex-col space-y-4 overflow-auto">
                {posts.length === 0 ? (
                    <p className="text-gray-400">No posts yet.</p>
                ) : (
                    posts.map((post, index) => (
                        <div key={index} className="p-4 bg-gray-900 text-gray-300 shadow rounded">
                            <h3 className="text-lg font-bold text-green-500">User</h3>
                            <p>{post.content}</p>
                            {post.images && post.images.length > 0 && (
                                <div className="mt-2">
                                    {post.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image} // Use the direct link from the images array
                                            alt={`Attachment ${idx + 1}`}
                                            className="w-32 h-32 object-cover mr-2"
                                        />
                                    ))}
                                </div>
                            )}
                            <p className="text-sm text-gray-500">
                                {new Date(post.timestamp).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Postingsection;
