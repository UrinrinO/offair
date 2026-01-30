// src/pages/Dashboard/AdminPosts.tsx
import { useState, useEffect } from "react";
import { db } from "../../../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Trash2 } from "lucide-react";

const AdminPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const postsCollection = collection(db, "posts");

  // READ: Fetch posts from Firebase
  const fetchPosts = async () => {
    const data = await getDocs(postsCollection);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREATE: Add a new post
  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(postsCollection, {
      title,
      category,
      date: new Date().toLocaleDateString(),
    });
    setTitle("");
    setCategory("");
    fetchPosts();
  };

  // DELETE: Remove a post
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    fetchPosts();
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-[var(--style-font)] mb-6">
        Manage Articles
      </h2>

      {/* Create Form */}
      <form
        onSubmit={handleAddPost}
        className="flex gap-4 mb-10 bg-white/5 p-4 rounded"
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-black border border-white/10 p-2 flex-1 outline-none focus:border-[var(--main)]"
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-black border border-white/10 p-2 w-48 outline-none focus:border-[var(--main)]"
        />
        <button
          type="submit"
          className="bg-[var(--main)] px-6 font-bold uppercase text-xs"
        >
          Post
        </button>
      </form>

      {/* List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center p-4 bg-[var(--bg-secondary)] border-l-4 border-[var(--main)]"
          >
            <div>
              <p className="font-bold">{post.title}</p>
              <p className="text-xs text-white/40">
                {post.category} • {post.date}
              </p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-500 hover:scale-110 transition-transform"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
