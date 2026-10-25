'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Form from '@components/Form'

const UpdatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const paramId = searchParams.get('id')
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    useEffect(() => {
        const fetchInitialValues = async () => {
            const response = await fetch(`/api/prompt/${paramId}`)
            const initialData = await response.json()
            if (initialData) {
                setPost(initialData)
            }
        }
        if (paramId) {
            fetchInitialValues()
        }
    }, [paramId])

    const updatePrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch(`/api/prompt/${paramId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            })
            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default UpdatePrompt
