  import React, { useState } from 'react'
  import { assets} from "../assets/assets"
const Profile = () => {

  const [user, setUser] = useState({
    name: 'Md Noman',
    image:assets.profile_pic,
    email: 'mdnoman@gmail.com',
    phone: '+91-700-245-6850',
    address:{
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    },
    gender: 'Male',
    dob: '2000-01-25'
  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={user.image} alt=''/>
      {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt4' type='text' value={user.name} onChange={e => setUser(prev => ({...prev,name:e.target.value}) )}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{user.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div >
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-blue-500'>{user.email}</p>
          <p className='font-medium'>Phone:</p>
          {
          isEdit 
          ? <input className='bg-gray-100 max-w-52' type='text' value={user.phone} onChange={e => setUser(prev => ({...prev,name:e.target.value}) )}/>
          : <p className='text-blue-500'>{user.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>
              <input className='bg-gray-50' onChange={(e) => setUser(prev => ({...prev, address: {...prev.address,line1: e.target.value}}))} value={user.address.line1} type='text'/>
              <br/>
              <input className='bg-gray-50' onChange={(e) => setUser(prev => ({...prev, address: {...prev.address,line1: e.target.value}}))} value={user.address.line2} type='text'/>
            </p>
            : <p className='text-gray-500'>
              {user.address.line1}
              <br/>
              {user.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
          isEdit 
          ? <select className='max-w-20 bg-gray-100' onClick={(e) => setUser(prev => ({...prev, gender: e.target.value}))} value={user.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          : <p className='text-gray-400'>{user.gender}</p>
          }
          <p className='font-medium'>Birth:</p>
          {
            isEdit 
            ? <input className='max-w-28 bg-gray-100' type='date' value={user.dob} onChange={(e) => setUser(prev => ({...prev, dob: e.target.value}))}/>
            : <p className='text-gray-400'>{user.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save</button>
          : <button className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default Profile