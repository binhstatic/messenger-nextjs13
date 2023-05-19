'use client'

import React, { useCallback, useState } from 'react'

import { useRouter } from 'next/navigation'

import { User } from '@prisma/client'
import axios from 'axios'

import Avatar from '@/app/components/Avatar'

interface UserBoxProps {
  data: User
}

const UserBox = ({ data }: UserBoxProps) => {
  const router = useRouter()
  const [isLoading, setIsloading] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setIsloading(true)

    axios
      .post('/api/conversations', {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`)
      })
      .finally(() => setIsloading(false))
  }, [data, router])

  return (
    <div
      onClick={handleClick}
      className="relative flex w-full cursor-pointer items-center space-x-3 rounded-lg bg-white p-3 transition hover:bg-neutral-100"
    >
      <Avatar user={data} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBox
