import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden w-full text-white py-3 rounded-xl bg-black border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                        <div className="flex h-full flex-row justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-white">
                                    &copy; Copyright 2023. All Rights Reserved by me.
                                </p>
                            </div>
                        </div>
            </div>
        </section>
  )
}

export default Footer