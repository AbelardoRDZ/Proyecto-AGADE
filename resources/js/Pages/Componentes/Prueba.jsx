import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/inertia-react'
import Post from '@/Components/Post';

function Prueba({ auth, posts }) {
    
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        body: ''
    })

    const submit = (e) => {
        e.preventDefault()
        //console.log(data);
        post(route('posts.store'), { onSuccess: () => reset() })
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Posts' />
            <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>
                <form onSubmit={submit}>

                    <input
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        type='text'
                        placeholder='Title'
                        autoFocus
                        className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                    >
                    </input>
                    <InputError message={errors.title} className='mt-2' />


                    <textarea
                        value={data.body}
                        onChange={e => setData('body', e.target.value)}
                        type='text'
                        placeholder='Body'
                        className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                    >
                    </textarea>
                    <InputError message={errors.title} className='mt-2' />

                    <PrimaryButton
                        className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'
                        discable={processing}
                    >
                        Create
                    </PrimaryButton>

                </form>
                <div className='mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg'>
                    {
                        posts.map(post =>
                            <Post key={post.id} post={post} />
                        )}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Prueba;