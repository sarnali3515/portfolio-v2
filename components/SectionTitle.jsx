"use client";
import React, { useState } from "react";

const SectionTitle = ({ title, description }) => {
    return (
        <div>
            <div className="text-center mb-2 px-4 mt-4 md:mt-8 z-10">
                <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-widest text-fuchsia-600 dark:text-fuchsia-500 mb-3 md:mb-4 lg:mb-6">
                    {title}
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle;