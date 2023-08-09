'use client';

import React, { useState, useEffect } from 'react'
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ArrowUp } from '@phosphor-icons/react'


const MyProfile = () => {
    const [posts, setPosts] = useState()
    const { data: session } = useSession()
    const router = useRouter()

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session.user.id}/posts`)
        const data = await response.json()
        setPosts(data)
    }

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        console.log(post._id)
        await fetch(`/api/prompt/${post._id}`, {
            method: "DELETE",
        });
        const filteredPosts = posts.filter((item) => item._id === post._id)
        setPosts(filteredPosts)
    }
    useEffect(() => {
        if (session?.user?.id) {
            fetchPosts()
        }
    }, [session])

    return (
        <div><Profile name="MY" desc="Welcome to your personalised profile page" data={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
            <ArrowUp />
        </div>
    )
}

export default MyProfile