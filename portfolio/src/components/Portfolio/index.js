import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "animate.css";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 1200 ? 1 : 6);
    const [animationClass, setAnimationClass] = useState("animate__animated animate__fadeIn");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const newItemsPerPage = window.innerWidth < 1200 ? 1 : 6;
            setItemsPerPage(newItemsPerPage);
            setCurrentPage(0);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(portfolioData.portfolio.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        
        setAnimationClass("animate__animated animate__fadeOut");
        
        setTimeout(() => {
            setCurrentPage(newPage);
            setAnimationClass("animate__animated animate__fadeIn");
        }, 50);
    };

    const handleNext = () => {
        handlePageChange((currentPage + 1) % totalPages);
    };

    const handlePrev = () => {
        handlePageChange((currentPage - 1 + totalPages) % totalPages);
    };

    const startIdx = currentPage * itemsPerPage;
    const visibleProjects = portfolioData.portfolio.slice(startIdx, startIdx + itemsPerPage);

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={"Projects".split("")} 
                            idx={15} 
                        />
                    </h1>
                </div>

                <div className={`portfolio-gallery ${animationClass}`}>
                    {visibleProjects.map((port, idx) => (
                        <div className="image-box" key={idx}>
                            <img src={port.cover} className="portfolio-image" alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button className="btn" onClick={() => window.open(port.url)}>
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button onClick={handlePrev}>&#10094;</button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <span
                            key={index}
                            className={index === currentPage ? "dot active" : "dot"}
                            onClick={() => handlePageChange(index)}
                        ></span>
                    ))}
                    <button onClick={handleNext}>&#10095;</button>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
