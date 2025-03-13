function openPopup() {
    let form = document.querySelector(".content-section form");

    if (form.checkValidity()) {
        let popup = document.getElementById("registerpopup");
        popup.classList.add("open-register-popup");
        popup.style.visibility = "visible";
        popup.style.transform = "translateX(-50%) scale(1)";
    } else {
        form.reportValidity(); // Shows validation tooltip for missing fields
    }
}

function closePopup() {
    let popup = document.getElementById("registerpopup");
    popup.classList.remove("open-register-popup");
    popup.style.visibility = "hidden";
    popup.style.transform = "translateX(-50%) scale(0)";
}

function openDiscardPopup() {
    let form = document.querySelector(".content-section form");
    let inputs = form.querySelectorAll("input[required], select[required]");
    let isEmpty = true;

    inputs.forEach(input => {
        if (input.value.trim()) {
            isEmpty = false;
        }
    });

    if (!isEmpty) {
        let discardPopup = document.getElementById("discardPopup");
        discardPopup.style.visibility = "visible";
        discardPopup.style.transform = "translateX(-50%) scale(1)";
    } else {
        // Focus on the first required field and trigger validation tooltip
        let firstRequiredField = document.querySelector("input[required]");
        if (firstRequiredField) {
            firstRequiredField.reportValidity();
            firstRequiredField.focus();
        }
    }
}

function closeDiscardPopup() {
    let discardPopup = document.getElementById("discardPopup");
    discardPopup.style.visibility = "hidden";
    discardPopup.style.transform = "translateX(-50%) scale(0)";
}

function discardChanges() {
    let form = document.querySelector(".content-section form");
    form.reset();
    closeDiscardPopup();
}






document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll(".content-section").forEach(section => {
            section.style.display = "none";
        });

        // Show the clicked section
        document.getElementById(sectionId).style.display = "block";

        // Update active tab
        document.querySelectorAll(".tabs button").forEach(button => {
            button.classList.remove("active");
        });

        document.querySelector(`.tabs button[data-section='${sectionId}']`).classList.add("active");
    }

    // Attach event listeners to tabs
    document.querySelectorAll(".tabs button").forEach(button => {
        button.addEventListener("click", function () {
            let sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Show the default section (Register Farmer)
    showSection("register-farmer");
});

document.addEventListener("DOMContentLoaded", function () {
    const fertilizerTag = document.querySelector(".fertilizer-tag");
    const customShape = document.querySelector(".custom-shape");

    fertilizerTag.addEventListener("click", function () {
        // Change the content inside `.custom-shape`
        customShape.innerHTML = `
           
            <div class="fertilizer-tag">Fertilizer
                <button class="add-button"><i class="fas fa-plus"></i></button>
            </div>
            <h2 class="section-title">Rent Items</h2>

            <div class="allcards">
            <div class="card-container">
                <div class="card">
                    <img src="../assets/image_13.png" alt="Urea">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Urea</h3>
                            <span class="id-no">201</span>
                        </div>
                        <p class="description">Urea – The most commonly used nitrogen fertilizer for rice growth.</p>
                        <span class="price">Rs 990.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>21KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_14.png" alt="AmmoniumSulfate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Ammonium Sulfate</h3>
                            <span class="id-no">202</span>
                        </div>
                        <p class="description">Ammonium Sulfate – Provides both nitrogen and sulfur for better growth.</p>
                        <span class="price">Rs 1000.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>30KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_15.png" alt="calciumammoniumnitrate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">calcium ammonium nitrate</h3>
                            <span class="id-no">203</span>
                        </div>
                        <p class="description">Calcium Ammonium Nitrate – A slow-release nitrogen fertilizer.</p>
                        <span class="price">Rs 1200.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>35KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_16.png" alt="SingleSuperPhosphate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Single Super Phosphate</h3>
                            <span class="id-no">204</span>
                        </div>
                        <p class="description">Machines combine harvesters used to cut and gather rice.</p>
                        <span class="price">Rs 900.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>20KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card-container">
                <div class="card">
                    <img src="../assets/image_17.png" alt="TripleSuperPhosphate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Triple Super Phosphate</h3>
                            <span class="id-no">205</span>
                        </div>
                        <p class="description">Triple Super Phosphate – A concentrated source of phosphorus.</p>
                        <span class="price">Rs 1100.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>10KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_18.png" alt="Di-Ammonium Phosphate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Di-Ammonium Phosphate</h3>
                            <span class="id-no">206</span>
                        </div>
                        <p class="description">Di-Ammonium Phosphate –Provides both nitrogen and phosphorus.</p>
                        <span class="price">Rs 850.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>20KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_19.png" alt="LiquidPhosphoricAcid">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Liquid Phosphoric Acid</h3>
                            <span class="id-no">207</span>
                        </div>
                        <p class="description">Liquid Phosphoric Acid – Promotes strong roots and early flowering.</p>
                        <span class="price">Rs 750.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>15 In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_20.png" alt="Mono-Ammonium Phosphate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Mono-Ammonium Phosphate</h3>
                            <span class="id-no">208</span>
                        </div>
                        <p class="description">MonoAmmonium Phosphate – Provide nitrogen and phosphorus.</p>
                        <span class="price">Rs 1250.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>15KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card-container">
                <div class="card">
                    <img src="../assets/image_21.png" alt="FoliarSpray">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Foliar Spray</h3>
                            <span class="id-no">209</span>
                        </div>
                        <p class="description">Foliar Spray – Directly sprayed onto leaves for quick absorption .</p>
                        <span class="price">Rs 950.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>19 In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_22.png" alt="Silicon-BasedFertilizers">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Silicon-Based Fertilizers</h3>
                            <span class="id-no">210</span>
                        </div>
                        <p class="description">Silicon-Based Fertilizers – Improves disease resistance and strengthens rice plants.</p>
                        <span class="price">Rs 980.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>30KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_23.png" alt="LiquidNPKFertilizers">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Liquid NPK Fertilizers</h3>
                            <span class="id-no">211</span>
                        </div>
                        <p class="description">Liquid NPK Fertilizers – Balanced nutrient supply through leaves.</p>
                        <span class="price">Rs 1750.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>25 In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_24.png" alt="Compost">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Compost</h3>
                            <span class="id-no">212</span>
                        </div>
                        <p class="description">Compost – Improves soil structure and microbial activity.</p>
                        <span class="price">Rs 700.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>30KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-container">
                <div class="card">
                    <img src="../assets/image_25.png" alt="ZincSulfate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">ZincSulfate</h3>
                            <span class="id-no">213</span>
                        </div>
                        <p class="description">Zinc Sulfate – Prevents zinc deficiency (common in paddy).</p>
                        <span class="price">Rs 970.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>25KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_26.png" alt="Humic&FulvicAcidFertilizers">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Humic & Fulvic Acid Fertilizers</h3>
                            <span class="id-no">214</span>
                        </div>
                        <p class="description">Humic & Fulvic Acid – Improves soil structure and nutrient uptake.</p>
                        <span class="price">Rs 1000.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>17 In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_27.png" alt="FerrousSulfate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Ferrous Sulfate</h3>
                            <span class="id-no">215</span>
                        </div>
                        <p class="description">Ferrous Sulfate – Supplies iron to prevent iron chlorosis.</p>
                        <span class="price">Rs 880.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>23KG In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image_28.png" alt="PotassiumSilicate">
                    <div class="card-content">
                        <div class="card-header">
                            <h3 class="title">Potassium Silicate</h3>
                            <span class="id-no">216</span>
                        </div>
                        <p class="description">Potassium Silicate – Strengthens cell walls and improves resistance to diseases.</p>
                        <span class="price">Rs 1150.00</span>
                        <div class="stock-info">
                            <span class="stock"><b>14 In Stock</b></span>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>4.0</span>
                            </span>
                        </div>
                        <div class="buttons">
                            <button class="edit">edit</button>
                            <button class="delete">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        `;
    });
});









