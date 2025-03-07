'use client'

export type Message = {
    id: string,
    content: string,
    sender: 'user'| 'ai'
}