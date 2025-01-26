import React, { Children } from "react";
import "./MovingStrip.css";
import { techNologyArray } from "./utils";

export const MovingStrip = () => {
    // Duplicate the array for infinite scrolling effect
    const duplicatedArray = [...techNologyArray];

    return (
        <div className="moving-strip-container">
            <div className="moving-track">
                {Children.toArray(
                    duplicatedArray.map((tech, index) => (
                        <div className="moving-strip-item" key={index}>
                            <img src={tech.img} alt={tech.name} />
                            <p>{tech.name}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
