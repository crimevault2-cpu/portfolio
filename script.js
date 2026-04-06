(function() {
    'use strict';

    // Academic projects (4 projects)
// ==========================
// ACADEMIC PROJECTS
// ==========================

const academicProjects = [
    {
        id: "conduit-house",
        title: "Conduit House",
        semester: "Sem 3 – Residence Design",
        location: "Koba, Gandhinagar",
        concept: "This residence design, located near Kumbheshwar Mahadev Temple in Koba, explores spatial organization through the conceptual lens of Peter Halley's 'cells and conduits,' translating geometric compositions into inhabitable form. The house is structured around a central passage acting as a primary connective spine, with functional spaces arranged as distinct volumes to create controlled movement and spatial hierarchy. Responding to the sloping, riverside site, the design integrates level variations, open-to-sky courtyards, and private green pockets to enhance light, ventilation, and spatial experience, while maintaining a clear transition from public to private zones within a cohesive stone-built form.",
        description: "This residence design, located near Kumbheshwar Mahadev Temple in Koba, explores spatial organization through the conceptual lens of Peter Halley's 'cells and conduits,' translating geometric compositions into inhabitable form. The house is structured around a central passage acting as a primary connective spine, with functional spaces arranged as distinct volumes to create controlled movement and spatial hierarchy. Responding to the sloping, riverside site, the design integrates level variations, open-to-sky courtyards, and private green pockets to enhance light, ventilation, and spatial experience, while maintaining a clear transition from public to private zones within a cohesive stone-built form.",
        images: [
            "documents/Conduit_House.png"
        ],
        pdfUrl: "documents/ADS4_TISHASHAH_23BAR035.pdf",
        thumbnail: "documents/Conduit_House.png"
    },
    {
        id: "naqsh-bazar",
        title: "Naqsh Bazar",
        semester: "Sem 4 – Institution Design",
        location: "Champaner",
        concept: "Naqsh Bazar reinterprets Islamic geometric carvings as inhabitable space, transforming pattern into a tessellated spatial system. Derived from hexagonal and triangular modules, the design organizes exhibition, workshop, and public functions through a network of nodes, buffers, and pathways. Responding to Champaner's contoured landscape, the project integrates level differences through stepped circulation and a central connecting core, creating a continuous movement spine leading to the amphitheatre. The result is a porous, interconnected environment where geometry, landscape, and human experience merge.",
        description: "Naqsh Bazar reinterprets Islamic geometric carvings as inhabitable space, transforming pattern into a tessellated spatial system. Derived from hexagonal and triangular modules, the design organizes exhibition, workshop, and public functions through a network of nodes, buffers, and pathways. Responding to Champaner's contoured landscape, the project integrates level differences through stepped circulation and a central connecting core, creating a continuous movement spine leading to the amphitheatre. The result is a porous, interconnected environment where geometry, landscape, and human experience merge.",
        images: [
            "documents/SEM4.png"
        ],
        pdfUrl: "documents/ADS4_TISHASHAH_23BAR035.pdf",
        thumbnail: "documents/SEM4.png"
    },
    {
        id: "beyond-plinth",
        title: "Beyond the Plinth",
        semester: "Sem 5 – Housing Design",
        location: "Khodiyarnagar",
        concept: "A housing proposal that reinterprets the traditional otla as a multi-level social system. The design extends community life beyond the ground plane through interconnected platforms, bridges, and shared corridors, forming a vertical neighbourhood. Clustered planning, plinth modulation, and double-height social spaces create continuous interaction across levels, transforming housing into an active, community-driven environment.",
        description: "A housing proposal that reinterprets the traditional otla as a multi-level social system. The design extends community life beyond the ground plane through interconnected platforms, bridges, and shared corridors, forming a vertical neighbourhood. Clustered planning, plinth modulation, and double-height social spaces create continuous interaction across levels, transforming housing into an active, community-driven environment.",
        images: [
            "documents/SEM5.png"
        ],
        pdfUrl: "documents/ADS5_TISHASHAH_23bar035.pdf",
        thumbnail: "documents/SEM5.png"
    },
    {
        id: "working-drawings",
        title: "Naqsh Bazar – Working Drawings",
        semester: "Sem 6 – Technical Development",
        location: "Champaner",
        concept: "This project develops the ADS 4 institutional design, Naqsh Bazar, into a detailed working drawing set, translating conceptual geometry into buildable architectural systems. The focus shifts from spatial exploration to technical resolution, addressing construction detailing, material articulation, and structural logic. A key design refinement includes the transformation of the roof into an exposed brick karbandi system, enhancing climatic performance while reinforcing the project's contextual and material expression. Through precise detailing of junctions, levels, and assemblies, the project establishes a clear relationship between geometry, structure, and construction, grounding the earlier conceptual approach into a realizable built form.",
        description: "This project develops the ADS 4 institutional design, Naqsh Bazar, into a detailed working drawing set, translating conceptual geometry into buildable architectural systems. The focus shifts from spatial exploration to technical resolution, addressing construction detailing, material articulation, and structural logic. A key design refinement includes the transformation of the roof into an exposed brick karbandi system, enhancing climatic performance while reinforcing the project's contextual and material expression. Through precise detailing of junctions, levels, and assemblies, the project establishes a clear relationship between geometry, structure, and construction, grounding the earlier conceptual approach into a realizable built form.",
        images: [
            "documents/SEM6.jpeg"
        ],
        pdfUrl: "documents/ADS6_TISHA_035.pdf",
        thumbnail: "documents/SEM6.jpeg"
    }
];


// ==========================
// COMPETITION
// ==========================

const competitionData = {
    title: "Utsav Bhawan & Urban Junctions",
    semester: "Competition · COA Ghaziabad | August 2025",
    location: "Ghaziabad, UP",
    concept: "This competition proposal for the Ghaziabad Development Authority reimagines a multipurpose public hall—Utsav Bhawan—along with key urban junctions as climate-responsive, people-centric spaces. The design integrates passive cooling through terracotta-based CoolAnt systems, reducing reliance on mechanical conditioning while maintaining thermal comfort in extreme climates. Simultaneously, junction interventions introduce shaded structures, pedestrian infrastructure, and community-oriented elements to transform underutilized traffic islands into active public spaces, creating a cohesive urban response rooted in sustainability, cultural context, and everyday usability.",
    description: "This competition proposal for the Ghaziabad Development Authority reimagines a multipurpose public hall—Utsav Bhawan—along with key urban junctions as climate-responsive, people-centric spaces. The design integrates passive cooling through terracotta-based CoolAnt systems, reducing reliance on mechanical conditioning while maintaining thermal comfort in extreme climates. Simultaneously, junction interventions introduce shaded structures, pedestrian infrastructure, and community-oriented elements to transform underutilized traffic islands into active public spaces, creating a cohesive urban response rooted in sustainability, cultural context, and everyday usability.",
    images: [
        "documents/GDA_COMPETITION.png",
        "documents/AMD_DBW.png"
    ],
    pdfUrl: "documents/GDA_Combined.pdf"
};


// ==========================
// RSP / FIELD STUDIES
// ==========================

const rspData = [
    {
        title: "Kutch – Measured Drawing",
        date: "Dec 2023",
        location: "Zararwadi & Shaam-e-Sarhad",
        description: "This measured drawing study documents vernacular architecture in Kutch through detailed documentation of Zarparwadi village and the Shaam-e-Sarhad resort. The exercise focuses on understanding spatial organization, construction techniques, and climatic responses embedded within traditional built forms. Through precise on-site measurements, plans, sections, and detailed drawings were developed, capturing elements such as circular bhungas, sloping roofs, and locally responsive materials. The study highlights how settlement patterns, structural systems, and material choices are closely tied to environmental conditions and cultural practices, offering insights into sustainable and context-driven architectural approaches.",
        images: [
            "documents/Kutch.png"
        ],
        thumbnail: "documents/Kutch.png",
        pdfUrl: "documents/KALP 2026.pdf"
    },
    {
        title: "Leh – Exploratory Study",
        date: "June 2024",
        location: "HIAL, Ladakh",
        description: "This exploratory study in Leh focuses on understanding climate-responsive architecture through on-site learning at HIAL (Himalayan Institute of Alternatives, Ladakh) and documentation of traditional built environments such as Yabgo Palace. The study investigates construction techniques including adobe brick making, wattle and daub, and passive solar systems like Trombe walls, highlighting their role in achieving thermal comfort in extreme climatic conditions. Detailed observations of traditional systems such as Kath Kunni, mud plastering, and insulated roofing reveal how local materials and techniques respond to seismic, thermal, and cultural contexts. The workshop-based learning, combined with site explorations, emphasizes sustainable, resource-efficient building practices deeply rooted in Ladakhi architecture.",
        images: [
            "documents/LEH.png"
        ],
        thumbnail: "documents/LEH.png",
        pdfUrl: "documents/leh rsp.pdf"
    },
    {
        title: "Assam & Meghalaya – Exploratory Study",
        date: "Dec 2024",
        location: "Haflong Field Studio",
        description: "This exploratory study focuses on understanding the urban and socio-spatial dynamics of Haflong, Assam, through mapping, site analysis, and SWOT evaluation, along with regional explorations across Assam and Meghalaya. The study documents the existing conditions of the town, including road networks, zoning patterns, nodes, and landmarks, identifying key issues such as unplanned growth, poor infrastructure, drainage problems, and lack of organized public spaces. Through analytical mapping and on-site observations, the project highlights the contrast between Haflong's natural landscape and its infrastructural challenges, while also identifying opportunities for redevelopment, particularly in reimagining the old market as a more organized and accessible public space.",
        images: [
            "documents/ASSAM.png"
        ],
        thumbnail: "documents/ASSAM.png",
        pdfUrl: "documents/assam rsp.pdf"
    },
    {
        title: "Ahmedabad – Field Studio (AI & Stepwell)",
        date: "June 2025",
        location: "Jethabhai ni Vav",
        description: "This field studio explores the reimagination of Jethabhai ni Vav through a combination of on-site documentation and AI-driven speculative design. The project begins with a detailed understanding of the stepwell's spatial qualities—its linear descent, layered pavilions, light penetration, and mass-void relationships—along with contextual analysis and activity mapping. Building on this, the intervention proposes a minimal yet strategic transformation that preserves the ASI-protected structure while activating its surroundings as a community space. The design introduces elements such as an art gallery, shaded seating, canteen, and sculptural installations, responding to existing user groups like students and local residents. A modular geometric system derived from the stepwell's carvings guides the spatial layout, ensuring continuity between heritage and contemporary insertions. AI tools like ChatGPT, Krea, and LookX were used to generate speculative visualizations, enabling the exploration of future scenarios where the stepwell functions as an active cultural and social node rather than a static monument.",
        images: [
            "documents/AMD_AI.png"
        ],
        thumbnail: "documents/AMD_AI.png",
        pdfUrl: "documents/ahmd ai rsp.pdf"
    }
];

    // DOM elements
    const academicGrid = document.getElementById('academic-grid');
    const rspGrid = document.getElementById('rsp-grid');
    const projectModal = document.getElementById('project-modal');
    const cvModal = document.getElementById('cv-modal');
    const modalContentDiv = document.getElementById('modal-content');
    const cvTrigger = document.getElementById('cv-trigger');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
    const gateOverlay = document.getElementById('gate-overlay');

    // ---------- GATE ANIMATION ----------
    function startGateAnimation() {
        if (!gateOverlay) return;
        setTimeout(() => {
            gateOverlay.classList.add('open');
            setTimeout(() => {
                gateOverlay.style.display = 'none';
                mainContent.classList.add('visible');
            }, 1300);
        }, 200);
    }

    // Helper functions
    function openModal(modalElement) {
        if (!modalElement) return;
        modalElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalElement) {
        if (!modalElement) return;
        modalElement.classList.remove('active');
        document.body.style.overflow = '';
    }

    function closeAllModals() {
        closeModal(projectModal);
        closeModal(cvModal);
    }

    function openPdfInNewTab(pdfUrl) {
        if (pdfUrl) window.open(pdfUrl, '_blank');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    // Render academic project modal
    function renderAcademicModal(project) {
        let imagesHtml = '';
        project.images.forEach(imgSrc => {
            imagesHtml += `<img src="${imgSrc}" alt="${escapeHtml(project.title)} visual" loading="lazy">`;
        });
        const modalHtml = `
            <div class="project-modal-content">
                <h2>${escapeHtml(project.title)}</h2>
                <div class="project-meta-detail">${escapeHtml(project.semester)} · ${escapeHtml(project.location)}</div>
                <div class="project-description">
                    <p>${escapeHtml(project.concept)}</p>
                </div>
                <div class="modal-image-grid">
                    ${imagesHtml}
                </div>
                <div class="download-panel">
                    <button class="view-pdf-btn" data-pdf="${escapeHtml(project.pdfUrl)}"><i class="fas fa-file-pdf"></i> View Full Panel (PDF)</button>
                </div>
                <p style="margin-top: 1rem; font-size: 0.7rem; color: #888;">Key drawings, renders, and documentation.</p>
            </div>
        `;
        modalContentDiv.innerHTML = modalHtml;
        openModal(projectModal);
        const pdfBtn = modalContentDiv.querySelector('.view-pdf-btn');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const pdfUrl = pdfBtn.getAttribute('data-pdf');
                openPdfInNewTab(pdfUrl);
            });
        }
    }

    // Render competition modal
    function renderCompetitionModal() {
        const comp = competitionData;
        let imagesHtml = '';
        comp.images.forEach(imgSrc => {
            imagesHtml += `<img src="${imgSrc}" alt="${escapeHtml(comp.title)} visual" loading="lazy">`;
        });
        const modalHtml = `
            <div class="project-modal-content">
                <h2>${escapeHtml(comp.title)}</h2>
                <div class="project-meta-detail">${escapeHtml(comp.semester)} · ${escapeHtml(comp.location)}</div>
                <div class="project-description">
                    <p>${escapeHtml(comp.concept)}</p>
                </div>
                <div class="modal-image-grid">
                    ${imagesHtml}
                </div>
                <div class="download-panel">
                    <button class="view-pdf-btn" data-pdf="${escapeHtml(comp.pdfUrl)}"><i class="fas fa-file-pdf"></i> View Full Panel (PDF)</button>
                </div>
                <p style="margin-top: 1rem; font-size: 0.7rem; color: #888;">Competition boards and concept renders.</p>
            </div>
        `;
        modalContentDiv.innerHTML = modalHtml;
        openModal(projectModal);
        const pdfBtn = modalContentDiv.querySelector('.view-pdf-btn');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const pdfUrl = pdfBtn.getAttribute('data-pdf');
                openPdfInNewTab(pdfUrl);
            });
        }
    }

    // Render RSP modal (now with PDF button)
    function renderRspModal(rspItem) {
        let imagesHtml = '';
        if (rspItem.images && rspItem.images.length) {
            rspItem.images.forEach(imgSrc => {
                imagesHtml += `<img src="${imgSrc}" alt="${escapeHtml(rspItem.title)}" loading="lazy">`;
            });
        }
        const modalHtml = `
            <div class="project-modal-content">
                <h2>${escapeHtml(rspItem.title)}</h2>
                <div class="project-meta-detail">${escapeHtml(rspItem.date)} · ${escapeHtml(rspItem.location)}</div>
                <div class="project-description">
                    <p>${escapeHtml(rspItem.description)}</p>
                </div>
                ${imagesHtml ? `<div class="modal-image-grid">${imagesHtml}</div>` : ''}
                <div class="download-panel">
                    <button class="view-pdf-btn" data-pdf="${escapeHtml(rspItem.pdfUrl)}"><i class="fas fa-file-pdf"></i> View Report (PDF)</button>
                </div>
            </div>
        `;
        modalContentDiv.innerHTML = modalHtml;
        openModal(projectModal);
        const pdfBtn = modalContentDiv.querySelector('.view-pdf-btn');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const pdfUrl = pdfBtn.getAttribute('data-pdf');
                openPdfInNewTab(pdfUrl);
            });
        }
    }

    // Build academic cards
    function buildAcademicCards() {
        if (!academicGrid) return;
        academicGrid.innerHTML = '';
        academicProjects.forEach((project) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.thumbnail}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${escapeHtml(project.title)}</h3>
                    <p class="project-meta">${escapeHtml(project.semester)}</p>
                </div>
            `;
            card.addEventListener('click', () => renderAcademicModal(project));
            academicGrid.appendChild(card);
        });
    }

    // Build RSP cards
    function buildRspCards() {
        if (!rspGrid) return;
        rspGrid.innerHTML = '';
        rspData.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'rsp-card';
            card.innerHTML = `
                <div class="rsp-image">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>
                <div class="rsp-info">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.location)}</p>
                    <div class="rsp-date"><i class="far fa-calendar-alt"></i> ${escapeHtml(item.date)}</div>
                </div>
            `;
            card.addEventListener('click', () => renderRspModal(item));
            rspGrid.appendChild(card);
        });
    }

    // Canvas background (same as before, reduced for brevity but functional)
    const canvas = document.getElementById('shape-canvas');
    if (canvas) {
        let ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let mouseX = width / 2;
        let mouseY = height / 2;
        let shapes = [];
        const SHAPE_COUNT = 28;
        function initShapes() {
            shapes = [];
            for (let i = 0; i < SHAPE_COUNT; i++) {
                const type = Math.random() > 0.6 ? 'rect' : (Math.random() > 0.5 ? 'circle' : 'line');
                shapes.push({
                    type: type,
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: 18 + Math.random() * 55,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.008,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    alpha: 0.06 + Math.random() * 0.1,
                    color: `rgba(30, 30, 28, ${0.04 + Math.random() * 0.07})`
                });
            }
        }
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initShapes();
        }
        function drawShapes() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            ctx.save();
            ctx.strokeStyle = '#d6d2c4';
            ctx.lineWidth = 0.4;
            const step = 70;
            for (let x = 0; x < width; x += step) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += step) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
            for (let shape of shapes) {
                const dx = mouseX - shape.x;
                const dy = mouseY - shape.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const force = Math.min(1.5, 150 / (dist + 35)) * 0.06;
                shape.x += dx * force + shape.speedX;
                shape.y += dy * force + shape.speedY;
                shape.rotation += shape.rotSpeed;
                if (shape.x < -150) shape.x = width + 150;
                if (shape.x > width + 150) shape.x = -150;
                if (shape.y < -150) shape.y = height + 150;
                if (shape.y > height + 150) shape.y = -150;
                ctx.save();
                ctx.translate(shape.x, shape.y);
                ctx.rotate(shape.rotation);
                ctx.globalAlpha = shape.alpha;
                ctx.fillStyle = shape.color;
                ctx.strokeStyle = '#aaa8a0';
                ctx.lineWidth = 0.7;
                if (shape.type === 'rect') {
                    ctx.fillRect(-shape.size/2, -shape.size/3, shape.size, shape.size * 0.7);
                    ctx.strokeRect(-shape.size/2, -shape.size/3, shape.size, shape.size * 0.7);
                } else if (shape.type === 'circle') {
                    ctx.beginPath();
                    ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                } else if (shape.type === 'line') {
                    ctx.beginPath();
                    ctx.moveTo(-shape.size/2, 0);
                    ctx.lineTo(shape.size/2, 0);
                    ctx.stroke();
                }
                ctx.restore();
            }
            requestAnimationFrame(drawShapes);
        }
        function onMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            const xPercent = (mouseX / width) * 100;
            const yPercent = (mouseY / height) * 100;
            document.body.style.setProperty('--gradient-x', `${xPercent}%`);
            document.body.style.setProperty('--gradient-y', `${yPercent}%`);
        }
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', onMouseMove);
        resizeCanvas();
        drawShapes();
    }

    // Smooth scroll
    navLinks.forEach(link => {
        if (link.getAttribute('id') === 'cv-trigger') return;
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // CV modal trigger
    if (cvTrigger) {
        cvTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(cvModal);
        });
    }

    // COA competition link handler
    function initCompetitionLink() {
        const coaLink = document.getElementById('coa-competition-link');
        if (coaLink) {
            coaLink.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal(cvModal);
                setTimeout(() => {
                    renderCompetitionModal();
                }, 200);
            });
        }
    }

    // Modal close handlers
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllModals();
        });
    });
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', () => closeAllModals());
    });
    const modalContainers = document.querySelectorAll('.modal-container');
    modalContainers.forEach(container => {
        container.addEventListener('click', (e) => e.stopPropagation());
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projectModal?.classList.contains('active') || cvModal?.classList.contains('active')) {
                closeAllModals();
            }
        }
    });

    // Intersection Observer
    const fadeElements = document.querySelectorAll('.hero-section, .academic-section, .rsp-section, .about-section, .contact-section, .footer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
    fadeElements.forEach(el => {
        el.classList.add('fade-scroll');
        observer.observe(el);
    });
    if (academicGrid) {
        academicGrid.classList.add('fade-scroll');
        observer.observe(academicGrid);
    }
    if (rspGrid) {
        rspGrid.classList.add('fade-scroll');
        observer.observe(rspGrid);
    }

    // Active nav state
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.style.borderBottomColor = '#111';
                    } else if (link.getAttribute('href') !== '#') {
                        link.style.borderBottomColor = 'transparent';
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', () => requestAnimationFrame(updateActiveNav));
    updateActiveNav();

    // Build everything
    buildAcademicCards();
    buildRspCards();
    initCompetitionLink();

    // Contact buttons
    const linkedinBtn = document.getElementById('linkedin-btn');
    const instagramBtn = document.getElementById('instagram-btn');
    const locationBtn = document.getElementById('location-btn');
    if (linkedinBtn) linkedinBtn.addEventListener('click', (e) => { e.preventDefault(); alert('LinkedIn profile coming soon.'); });
    if (instagramBtn) instagramBtn.addEventListener('click', (e) => { e.preventDefault(); alert('Instagram portfolio page under construction.'); });
    if (locationBtn) locationBtn.addEventListener('click', (e) => { e.preventDefault(); alert('Mehsana, Gujarat, India'); });

    // Start gate animation
    startGateAnimation();

    console.log('Portfolio ready — RSP items now have PDF buttons that open in new tab.');
})();