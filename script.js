document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('jokeModal');
    const closeButton = document.getElementById('closeModal');

    // Ticket counter animation
    const ticketCount = document.getElementById('ticketCount');
    let currentCount = 150;
    let isCounting = false;

    function animateCount() {
        if (currentCount > 0) {
            currentCount -= Math.floor(Math.random() * 3) + 1;
            if (currentCount < 0) currentCount = 0;
            ticketCount.textContent = currentCount;
            
            // Add a small delay between updates
            setTimeout(animateCount, Math.random() * 2000 + 1000);
        }
    }

    // Start counting when the page loads
    setTimeout(animateCount, 2000);

    // Global function for the onclick event
    window.showModal = function() {
        modal.style.display = 'flex';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.classList.add('show');
        }, 10);
    };

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Add hover effect to footballs
    const footballs = document.querySelectorAll('.football');
    footballs.forEach(football => {
        football.addEventListener('mouseover', () => {
            football.style.transform = 'scale(1.1)';
            football.style.transition = 'transform 0.3s ease';
        });
        
        football.addEventListener('mouseout', () => {
            football.style.transform = 'scale(1)';
        });
    });

    // Language translations
    const translations = {
        en: {
            home: "Home",
            events: "Events",
            account: "Account",
            help: "Help",
            matchInfo: "European Qualifiers 2025",
            matchDate: "September 4, 2025 - 20:45",
            matchType: "Vasil Levski National Stadium, Sofia",
            ticketHeader: "VIP Ticket",
            ticketType: "VIP Section",
            price: "Price",
            currency: "BGN",
            remainingTickets: "Only <span id='ticketCount'>150</span> tickets left!",
            ticketDetails: "Ticket Details",
            buyButton: "Buy Ticket",
            infoTitle: "Important Information",
            infoSubtitle: "Entry Requirements",
            infoList: [
                "Gates open 2 hours before kick-off",
                "Valid ID required",
                "No bottles or food allowed",
                "Free parking available"
            ],
            directionsTitle: "How to Get There",
            directionsList: [
                "Bus: 72, 94, 120",
                "Metro: Vasil Levski Station",
                "Parking: 1000 spaces"
            ],
            aboutUs: "About Us",
            contacts: "Contacts",
            usefulLinks: "Useful Links",
            copyright: "© 2025 TicketPro.bg - All rights reserved.",
            breadcrumb: {
                home: "Home",
                sport: "Sports",
                football: "Football",
                match: "Bulgaria vs Spain"
            },
            modal: {
                title: "April Fools! 😄",
                message: "Don't worry - you can watch the match on PlayStation! 🎮",
                message2: "Or play with the ball in the yard! ⚽",
                message3: "Happy April Fools! 😋🎉",
                close: "Close"
            },
            footer: {
                about: {
                    title: "About Us",
                    text: "TicketPro.bg is the leading ticket sales platform in Bulgaria with over 10 years of experience.",
                    address: "Vasil Levski Blvd. 45, Sofia"
                },
                contacts: {
                    title: "Contact Us",
                    customerService: "Customer Service",
                    contactUs: "Contact Us",
                    faq: "FAQ",
                    terms: "Terms & Conditions",
                    privacy: "Privacy Policy"
                },
                links: {
                    title: "Useful Links",
                    sports: "Sports Events",
                    concerts: "Concerts",
                    theatre: "Theatre",
                    festivals: "Festivals",
                    voucher: "Load Voucher"
                }
            },
            pageTitle: "TicketPro.bg - VIP Tickets for Bulgaria vs Spain",
            ticketInfo: {
                section: "VIP Section",
                row: "Row",
                seat: "Seat",
                date: "Date",
                time: "Time",
                venue: "Venue",
                match: "Match",
                price: "Price",
                currency: "BGN",
                remainingTickets: "Only <span id='ticketCount'>150</span> tickets left!",
                ticketDetails: "Ticket Details",
                buyButton: "Buy Ticket"
            },
            info: {
                title: "Important Information",
                subtitle: "Entry Requirements",
                list: [
                    "Gates open 2 hours before kick-off",
                    "Valid ID required",
                    "No bottles or food allowed",
                    "Free parking available"
                ]
            },
            directions: {
                title: "How to Get There",
                list: [
                    "Bus: 72, 94, 120",
                    "Metro: Vasil Levski Station",
                    "Parking: 1000 spaces"
                ]
            },
            matchTitle: "Bulgaria vs Spain",
            matchDescription: "An exciting match between the national teams of Bulgaria and Spain in the European World Cup qualifiers. An intense match with many scoring opportunities is expected.",
            matchDescription2: "The Bulgarian team will strive to defeat the European giant in this important qualifier. We expect a full stadium and an incredible atmosphere!",
            ticketCategories: {
                title: "Ticket Categories",
                sectionA: {
                    title: "Section A - 80 BGN",
                    description: "Central section with excellent visibility"
                },
                sectionB: {
                    title: "Section B - 60 BGN",
                    description: "Side sections with good visibility"
                },
                vip: {
                    title: "VIP Box - 150 BGN",
                    description: "Best seats, refreshments included"
                },
                fanZone: {
                    title: "Fan Zone - 50 BGN",
                    description: "Stands behind the goals"
                }
            },
            aboutMatch: "About the Match"
        },
        bg: {
            home: "Начало",
            events: "Събития",
            account: "Акаунт",
            help: "Помощ",
            matchInfo: "Европейска квалификация 2025",
            matchDate: "4 Септември 2025 г. - 20:45 ч.",
            matchType: "Национален стадион \"Васил Левски\", София",
            ticketHeader: "VIP Билет",
            ticketType: "VIP Сектор",
            price: "Цена",
            currency: "лв.",
            remainingTickets: "Остават само <span id='ticketCount'>150</span> билета!",
            ticketDetails: "Детайли на билета",
            buyButton: "Купи билет",
            infoTitle: "Важна информация",
            infoSubtitle: "Изисквания за влизане",
            infoList: [
                "Вратите се отварят 2 часа преди началото",
                "Необходим е валиден документ за самоличност",
                "Забранено е внасянето на бутилки и храна",
                "Паркирането е безплатно"
            ],
            directionsTitle: "Как да стигнете",
            directionsList: [
                "Автобус: 72, 94, 120",
                "Метро: Станция \"Васил Левски\"",
                "Паркинг: 1000 места"
            ],
            aboutUs: "За нас",
            contacts: "Контакти",
            usefulLinks: "Полезни връзки",
            copyright: "© 2025 TicketPro.bg - Всички права запазени.",
            breadcrumb: {
                home: "Начало",
                sport: "Спорт",
                football: "Футбол",
                match: "България срещу Испания"
            },
            modal: {
                title: "Първоаприлска шега! 😄",
                message: "Не се притеснявайте - можете да гледате мача на PlayStation! 🎮",
                message2: "Или да играете с топката в двора! ⚽",
                message3: "Честит първи април! 😋🎉",
                close: "Затвори"
            },
            footer: {
                about: {
                    title: "За нас",
                    text: "TicketPro.bg е водещата платформа за продажба на билети в България с над 10 години опит.",
                    address: "бул. Васил Левски 45, София"
                },
                contacts: {
                    title: "Контакти",
                    customerService: "Обслужване на клиенти",
                    contactUs: "Връзка с нас",
                    faq: "Въпроси и отговори",
                    terms: "Общи условия",
                    privacy: "Политика за поверителност"
                },
                links: {
                    title: "Полезни връзки",
                    sports: "Спортни събития",
                    concerts: "Концерти",
                    theatre: "Театър",
                    festivals: "Фестивали",
                    voucher: "Зареди ваучер"
                }
            },
            pageTitle: "TicketPro.bg - VIP Билети за България срещу Испания",
            ticketInfo: {
                section: "VIP Сектор",
                row: "Ред",
                seat: "Място",
                date: "Дата",
                time: "Час",
                venue: "Място",
                match: "Мач",
                price: "Цена",
                currency: "лв.",
                remainingTickets: "Остават само <span id='ticketCount'>150</span> билета!",
                ticketDetails: "Детайли на билета",
                buyButton: "Купи билет"
            },
            info: {
                title: "Важна информация",
                subtitle: "Изисквания за влизане",
                list: [
                    "Вратите се отварят 2 часа преди началото",
                    "Необходим е валиден документ за самоличност",
                    "Забранено е внасянето на бутилки и храна",
                    "Паркирането е безплатно"
                ]
            },
            directions: {
                title: "Как да стигнете",
                list: [
                    "Автобус: 72, 94, 120",
                    "Метро: Станция \"Васил Левски\"",
                    "Паркинг: 1000 места"
                ]
            },
            matchTitle: "България срещу Испания",
            matchDescription: "Вълнуващ двубой между националните отбори на България и Испания в рамките на европейските квалификации за Световното първенство. Очаква се интензивен мач с много голови положения.",
            matchDescription2: "Отборът на България ще се стреми да победи европейския гранд в този важен квалификационен мач. Очакваме пълен стадион и невероятна атмосфера!",
            ticketCategories: {
                title: "Категории билети",
                sectionA: {
                    title: "Сектор A - 80 лв.",
                    description: "Централен сектор с отлична видимост"
                },
                sectionB: {
                    title: "Сектор B - 60 лв.",
                    description: "Странични сектори с добра видимост"
                },
                vip: {
                    title: "VIP Ложа - 150 лв.",
                    description: "Най-добрите места, включена консумация"
                },
                fanZone: {
                    title: "Фен зона - 50 лв.",
                    description: "Трибуни зад головете"
                }
            },
            aboutMatch: "За мача"
        }
    };

    let currentLang = 'bg';

    // Make toggleLanguage globally available
    window.toggleLanguage = function() {
        currentLang = currentLang === 'bg' ? 'en' : 'bg';
        updateLanguage();
        updateLangButton();
    };

    function updateLangButton() {
        const langButton = document.querySelector('.lang-switch');
        if (!langButton) return;
        
        const langText = langButton.querySelector('.lang-text');
        const langIcon = langButton.querySelector('i');
        
        if (currentLang === 'en') {
            langIcon.className = 'fas fa-flag-usa fa-lg';
            langText.textContent = 'EN';
            langButton.style.background = 'linear-gradient(45deg, #002868, #bf0a30)';
            langButton.style.borderColor = '#ffffff';
        } else {
            langIcon.className = 'fas fa-flag fa-lg';
            langText.textContent = 'BG';
            langButton.style.background = 'linear-gradient(45deg, #00966E, #D62612)';
            langButton.style.borderColor = '#ffffff';
        }
        
        langButton.classList.toggle('active', currentLang === 'en');
    }

    function updateLanguage() {
        try {
            // Update page title
            document.title = translations[currentLang].pageTitle;

            // Update navigation
            const navLinks = document.querySelectorAll('a[href="#"]');
            if (navLinks.length >= 4) {
                navLinks[0].innerHTML = `<i class="fas fa-home"></i> ${translations[currentLang].home}`;
                navLinks[1].innerHTML = `<i class="fas fa-calendar"></i> ${translations[currentLang].events}`;
                navLinks[2].innerHTML = `<i class="fas fa-user"></i> ${translations[currentLang].account}`;
                navLinks[3].innerHTML = `<i class="fas fa-question-circle"></i> ${translations[currentLang].help}`;
            }

            // Update match info
            const matchInfo = document.querySelector('.match-info');
            const matchDate = document.querySelector('.match-date');
            const matchType = document.querySelector('.match-type');
            if (matchInfo) matchInfo.innerHTML = `<i class="fas fa-trophy"></i> ${translations[currentLang].matchInfo}`;
            if (matchDate) matchDate.innerHTML = `<i class="fas fa-calendar"></i> ${translations[currentLang].matchDate}`;
            if (matchType) matchType.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].matchType}`;

            // Update ticket info
            const ticketHeader = document.querySelector('.ticket-header h2');
            const ticketType = document.querySelector('.ticket-type');
            const currency = document.querySelector('.currency');
            const ticketCounter = document.querySelector('.ticket-counter span');
            const ticketDetailsTitle = document.querySelector('.ticket-details h3');
            const buyButton = document.querySelector('.buy-button');

            if (ticketHeader) ticketHeader.textContent = translations[currentLang].ticketInfo.section;
            if (ticketType) ticketType.textContent = translations[currentLang].ticketInfo.section;
            if (currency) currency.textContent = translations[currentLang].ticketInfo.currency;
            if (ticketCounter) ticketCounter.innerHTML = translations[currentLang].ticketInfo.remainingTickets;
            if (ticketDetailsTitle) ticketDetailsTitle.textContent = translations[currentLang].ticketInfo.ticketDetails;
            if (buyButton) buyButton.innerHTML = `<i class="fas fa-shopping-cart"></i> ${translations[currentLang].ticketInfo.buyButton}`;

            // Update ticket details
            const ticketDetailsContainer = document.querySelector('.ticket-details');
            if (ticketDetailsContainer) {
                const details = ticketDetailsContainer.querySelectorAll('p');
                if (details.length >= 3) {
                    const dateTime = translations[currentLang].matchDate.split(' - ');
                    details[0].innerHTML = `<i class="fas fa-calendar"></i> ${dateTime[0]}`;
                    details[1].innerHTML = `<i class="fas fa-clock"></i> ${dateTime[1].replace(' ч.', '')}`;
                    details[2].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].matchType}`;
                }
            }

            // Update info cards
            const infoCards = document.querySelectorAll('.info-card');
            infoCards.forEach(card => {
                const title = card.querySelector('h3');
                const list = card.querySelector('ul');
                
                if (title) {
                    // Important Information card
                    if (title.textContent.includes('Важна информация') || title.textContent.includes('Important Information')) {
                        title.textContent = translations[currentLang].info.title;
                        if (list) {
                            const icons = ['fa-door-open', 'fa-id-card', 'fa-ban', 'fa-parking'];
                            list.innerHTML = translations[currentLang].info.list
                                .map((item, index) => `<li><i class="fas ${icons[index]}"></i> ${item}</li>`)
                                .join('');
                        }
                    }
                    // Directions card
                    else if (title.textContent.includes('Как да стигнете') || title.textContent.includes('How to Get There')) {
                        title.textContent = translations[currentLang].directions.title;
                        if (list) {
                            const icons = ['fa-bus', 'fa-subway', 'fa-parking'];
                            list.innerHTML = translations[currentLang].directions.list
                                .map((item, index) => `<li><i class="fas ${icons[index]}"></i> ${item}</li>`)
                                .join('');
                        }
                    }
                }
            });

            // Update "About the Match" title
            const aboutMatchTitle = document.querySelector('.info-section h2');
            if (aboutMatchTitle) {
                aboutMatchTitle.textContent = translations[currentLang].aboutMatch;
            }

            // Update footer
            const footerSections = document.querySelectorAll('.footer-section');
            if (footerSections.length >= 3) {
                // About section
                const aboutTitle = footerSections[0].querySelector('h4');
                const aboutText = footerSections[0].querySelector('p');
                if (aboutTitle) aboutTitle.textContent = translations[currentLang].footer.about.title;
                if (aboutText) aboutText.textContent = translations[currentLang].footer.about.text;

                // Contacts section
                const contactsTitle = footerSections[1].querySelector('h4');
                const contactsPhone = footerSections[1].querySelector('p:nth-child(2)');
                const contactsEmail = footerSections[1].querySelector('p:nth-child(3)');
                const contactsAddress = footerSections[1].querySelector('p:nth-child(4)');

                if (contactsTitle) contactsTitle.textContent = translations[currentLang].footer.contacts.title;
                if (contactsPhone) contactsPhone.innerHTML = `<i class="fas fa-phone"></i> ${translations[currentLang].footer.contacts.phone}: +359 2 123 4567`;
                if (contactsEmail) contactsEmail.innerHTML = `<i class="fas fa-envelope"></i> ${translations[currentLang].footer.contacts.email}: info@ticketpro.bg`;
                if (contactsAddress) contactsAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].footer.contacts.address}: Sofia, Bulgaria`;

                // Links section
                const linksTitle = footerSections[2].querySelector('h4');
                const linksList = footerSections[2].querySelector('ul');
                if (linksTitle) linksTitle.textContent = translations[currentLang].footer.links.title;
                if (linksList) {
                    linksList.innerHTML = `
                        <li><a href="#"><i class="fas fa-file-alt"></i> ${translations[currentLang].footer.links.terms}</a></li>
                        <li><a href="#"><i class="fas fa-shield-alt"></i> ${translations[currentLang].footer.links.privacy}</a></li>
                        <li><a href="#"><i class="fas fa-question-circle"></i> ${translations[currentLang].footer.links.faq}</a></li>
                    `;
                }
            }

            // Update copyright
            const copyright = document.querySelector('.footer-bottom');
            if (copyright) copyright.textContent = translations[currentLang].copyright;

            // Update breadcrumb
            const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
            if (breadcrumbLinks.length >= 3) {
                breadcrumbLinks[0].textContent = translations[currentLang].breadcrumb.home;
                breadcrumbLinks[1].textContent = translations[currentLang].breadcrumb.sport;
                breadcrumbLinks[2].textContent = translations[currentLang].breadcrumb.football;
            }
            const breadcrumbContainer = document.querySelector('.breadcrumb .container');
            if (breadcrumbContainer) {
                const textNodes = Array.from(breadcrumbContainer.childNodes);
                const lastTextNode = textNodes.find(node => 
                    node.nodeType === Node.TEXT_NODE && 
                    node.textContent.includes('България срещу Испания')
                );
                if (lastTextNode) {
                    lastTextNode.textContent = ` / ${translations[currentLang].breadcrumb.match}`;
                }
            }

            // Update ticket categories title
            const ticketCategoriesTitle = document.querySelector('.info-section:nth-of-type(2) h2');
            if (ticketCategoriesTitle) {
                ticketCategoriesTitle.textContent = translations[currentLang].ticketCategories.title;
            }

            // Update ticket categories
            const categories = document.querySelectorAll('.category');
            if (categories.length >= 4) {
                categories[0].querySelector('h3').textContent = translations[currentLang].ticketCategories.sectionA.title;
                categories[0].querySelector('p').textContent = translations[currentLang].ticketCategories.sectionA.description;
                categories[1].querySelector('h3').textContent = translations[currentLang].ticketCategories.sectionB.title;
                categories[1].querySelector('p').textContent = translations[currentLang].ticketCategories.sectionB.description;
                categories[2].querySelector('h3').textContent = translations[currentLang].ticketCategories.vip.title;
                categories[2].querySelector('p').textContent = translations[currentLang].ticketCategories.vip.description;
                categories[3].querySelector('h3').textContent = translations[currentLang].ticketCategories.fanZone.title;
                categories[3].querySelector('p').textContent = translations[currentLang].ticketCategories.fanZone.description;
            }

            // Update footer about section
            const aboutSection = document.querySelector('.footer-section:first-child');
            if (aboutSection) {
                const aboutText = aboutSection.querySelector('p:first-of-type');
                const aboutAddress = aboutSection.querySelector('p:nth-child(3)');
                if (aboutText) aboutText.textContent = translations[currentLang].footer.about.text;
                if (aboutAddress) aboutAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].footer.about.address}`;
            }

            // Update footer contacts section
            const contactsSection = document.querySelector('.footer-section:nth-child(2)');
            if (contactsSection) {
                const contactsList = contactsSection.querySelector('ul');
                if (contactsList) {
                    contactsList.innerHTML = `
                        <li><a href="#">${translations[currentLang].footer.contacts.customerService}</a></li>
                        <li><a href="#">${translations[currentLang].footer.contacts.contactUs}</a></li>
                        <li><a href="#">${translations[currentLang].footer.contacts.faq}</a></li>
                        <li><a href="#">${translations[currentLang].footer.contacts.terms}</a></li>
                        <li><a href="#">${translations[currentLang].footer.contacts.privacy}</a></li>
                    `;
                }
            }

            // Update footer links section
            const linksSection = document.querySelector('.footer-section:last-child');
            if (linksSection) {
                const linksList = linksSection.querySelector('ul');
                if (linksList) {
                    linksList.innerHTML = `
                        <li><a href="#">${translations[currentLang].footer.links.sports}</a></li>
                        <li><a href="#">${translations[currentLang].footer.links.concerts}</a></li>
                        <li><a href="#">${translations[currentLang].footer.links.theatre}</a></li>
                        <li><a href="#">${translations[currentLang].footer.links.festivals}</a></li>
                        <li><a href="#">${translations[currentLang].footer.links.voucher}</a></li>
                    `;
                }
            }

            // Update match title and description
            const matchTitle = document.querySelector('h1');
            const matchDescription = document.querySelector('.info-section p:nth-child(2)');
            const matchDescription2 = document.querySelector('.info-section p:nth-child(3)');
            if (matchTitle) matchTitle.textContent = translations[currentLang].matchTitle;
            if (matchDescription) matchDescription.textContent = translations[currentLang].matchDescription;
            if (matchDescription2) matchDescription2.textContent = translations[currentLang].matchDescription2;

            // Update April Fools modal
            const modalTitle = document.querySelector('#jokeModal h2');
            const modalMessage = document.querySelector('#jokeModal p:nth-of-type(1)');
            const modalMessage2 = document.querySelector('#jokeModal p:nth-of-type(2)');
            const modalMessage3 = document.querySelector('#jokeModal p:nth-of-type(3)');
            const modalCloseButton = document.querySelector('#closeModal');
            
            if (modalTitle) modalTitle.textContent = translations[currentLang].modal.title;
            if (modalMessage) modalMessage.textContent = translations[currentLang].modal.message;
            if (modalMessage2) modalMessage2.textContent = translations[currentLang].modal.message2;
            if (modalMessage3) modalMessage3.textContent = translations[currentLang].modal.message3;
            if (modalCloseButton) modalCloseButton.innerHTML = `<i class="fas fa-times"></i> ${translations[currentLang].modal.close}`;
        } catch (error) {
            console.error('Error updating language:', error);
        }
    }

    // Initialize language
    updateLanguage();
    updateLangButton();
}); 