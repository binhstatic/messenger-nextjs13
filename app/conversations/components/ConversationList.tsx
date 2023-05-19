'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import clsx from 'clsx'
import { MdOutlineGroupAdd } from 'react-icons/md'

import useConversation from '@/app/hooks/useConversation'
import { FullConversationType } from '@/app/types'

import ConversationBox from './ConversationBox'

interface ConversationListProps {
  initialItems: FullConversationType[]
}

const ConversationList = ({ initialItems }: ConversationListProps) => {
  const [items, setItems] = useState(initialItems)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { conversationId, isOpen } = useConversation()

  return (
    <aside
      className={clsx(
        `overflow-y-autoborder-rborder-gray-200 lg:left-20lg:block fixed inset-y-0 pb-20 lg:w-80 lg:pb-0 `,
        isOpen ? 'hidden' : 'block w-full',
      )}
    >
      <div className="px-5">
        <div className="mb-4 flex justify-between pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="
                cursor-pointer 
                rounded-full 
                bg-gray-100 
                p-2 
                text-gray-600 
                transition 
                hover:opacity-75
              "
          >
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
  )
}

export default ConversationList
