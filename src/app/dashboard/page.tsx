import AddData from '@/Components/AddData';
import DataList from '@/Components/DataList';
import { UserButton, currentUser } from '@clerk/nextjs'
import React from 'react'

const dashboard = async () => {
  const user = await currentUser();
  return (
    <div className='w-full h-screen bg-primary flex justify-center items-center'>
      <div className='w-full h-[600px] m-4 shadow-lg bg-gradient-to-tr from-white/80 to-gray relative'>
        <div className="mx-6 my-6 flex justify-evenly">
          <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              <UserButton />
              <p className='text-md text-white font-medium text-center'>{user?.firstName}{user?.lastName}</p>
            </div>
          </div>
          <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              <UserButton />
              <p className='text-md text-white font-medium text-center'>{user?.firstName}{user?.lastName}</p>
            </div>
          </div> <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              <UserButton />
              <p className='text-md text-white font-medium text-center'>{user?.firstName}{user?.lastName}</p>
            </div>
          </div> <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              <UserButton />
              <p className='text-md text-white font-medium text-center'>{user?.firstName}{user?.lastName}</p>
            </div>
          </div>
        </div>
        <div className='absolute h-[390px] w-full flex justify-evenly'>
          <AddData />
          <DataList />
        </div>
      </div>
    </div>
  )
}

export default dashboard
