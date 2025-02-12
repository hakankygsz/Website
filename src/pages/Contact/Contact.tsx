import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Adınız en az 2 karakter olmalıdır.')
                .required('Adınızı girmek zorunludur.'),
            email: Yup.string()
                .email('Geçerli bir e-posta girin.')
                .required('E-posta adresi zorunludur.'),
            message: Yup.string()
                .min(10, 'Mesaj en az 10 karakter olmalıdır.')
                .required('Mesaj alanı boş bırakılamaz.')
        }),
        onSubmit: (values) => {
            console.log('Form verileri:', values);
            alert('Form başarıyla gönderildi!');


        }
    });

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-black text-white p-3 lg:p-6">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-extrabold mb-4 text-neutral-300">İletişim</h1>
                <p className="text-lg max-w-xl text-gray-300">
                    Bize ulaşmak için aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapacağız.
                </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="w-full max-w-2xl border border-neutral-950 p-6 lg:p-8 rounded-lg shadow-lg flex flex-col gap-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium text-gray-300 mb-2">Adınız</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full p-5 bg-black text-white border border-neutral-900 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none duration-300"
                        placeholder="Adınızı girin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                    ) : null}
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium text-gray-300 mb-2">E-Postanız</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full p-5 bg-black text-white border border-neutral-900 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none duration-300"
                        placeholder="E-posta adresinizi girin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    ) : null}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium text-gray-300 mb-2">Mesajınız</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full p-5 bg-black text-white border border-neutral-900 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none duration-300"
                        placeholder="Mesajınızı yazın"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                    ) : null}
                </div>
                
                <button type="submit" className="w-full border-2 border-neutral-950 hover:ring text-white text-2xl font-semibold py-3 rounded-lg duration-300">
                    Gönder
                </button>
            </form>
        </div>
    );
};

export default Contact;