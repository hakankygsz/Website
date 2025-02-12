import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectData from './ProjectsData';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen max-w-screen-xl flex flex-col items-center mx-auto text-white p-12">
            <div className='flex flex-col items-center justify-center mb-8'>
                <h1 className="text-4xl font-bold mb-4">Projelerim</h1>
                <p className="text-lg max-w-2xl text-center">
                    Burada üzerinde çalıştığım projeleri bulabilirsiniz. Güncellemeler için takipte kalın!
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {ProjectData.map((project, index) => (
                    <div key={index} className="border border-neutral-900 p-4 flex flex-col items-center justify-between rounded-lg min-h-[400px]">
                        <ul className='flex items-center justify-center gap-2 pb-4 flex-wrap'>
                            {project.technologies.map((v, i) => (
                                <li key={i} className='h-10 px-2 flex items-center justify-center rounded-lg hover:ring duration-300 cursor-pointer border border-neutral-800'>
                                    {v}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-semibold mb-2 text-center">{project.title}</h2>
                        <p className="text-sm text-gray-400 mb-6 text-center flex-grow">{project.description}</p>
                        <ul className='flex items-center justify-center gap-4 pb-4'>
                            {project.links.map((v, i) => (
                                <Link to={v.url} key={i} className='h-14 w-14 flex items-center justify-center rounded-lg text-2xl cursor-pointer border border-neutral-800 hover:ring duration-300'>
                                    {v.Logo}
                                </Link>
                            ))}
                        </ul>
                        <button className='py-4 px-16 border border-neutral-900 hover:ring duration-300 rounded-lg mt-auto'>
                            Daha Fazla Bilgi
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;