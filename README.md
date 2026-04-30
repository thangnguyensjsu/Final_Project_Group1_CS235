# Final_Project_Group1_CS235

1. **Project Title & Team**

   **Project Name:** BiteDecide — AI-Assisted Restaurant Discovery App

   **Team Members:**
   * Thang Nguyen - Research & Problem Statement
   * Ryan Chang - Frontend Development
   * Sree Mourya Gojja - Frontend Development, Backend Design & Database

2. **Abstract**

   BiteDecide is an AI-assisted restaurant discovery web app designed to reduce decision fatigue when choosing where to eat. Users can describe what they want in natural language (e.g., "cheap dinner nearby"), and the system surfaces a prioritized "Top Pick for You" recommendation alongside a filtered list of options. The app also supports filter-based search and a full ordering flow from menu browsing through checkout.

3. **Motivation**

   Existing food apps like Yelp overwhelm users with long, unprioritized lists of restaurants and require tedious manual filtering. Our heuristic evaluation of Yelp identified six major usability problems: overwhelming search results, lack of personalized recommendations, inefficient filtering, high cognitive load during comparison, poor visibility of ranking logic, and no context-aware suggestions. These findings motivated us to design a smarter, more guided food discovery experience that reduces cognitive load and supports faster decision-making.

4. **Related Work**

   We evaluated **Yelp** as our primary related system using Nielsen's 10 heuristics. Key findings:
   - **Problems:** Overwhelming results (Aesthetic & Minimalist Design), no personalized recommendations (Flexibility & Efficiency of Use), inefficient filters (User Control & Freedom), high cognitive load during comparison (Recognition Rather Than Recall), opaque ranking logic (Visibility of System Status), no context-aware recommendations (Match Between System & Real World).
   - **Strengths:** Clear star ratings and review counts, map integration for spatial awareness, rich food photography.

5. **Design Goals & Principles**

   Our design is guided by five job stories:
   - **Fast Decision Making** — When hungry and searching, users want a quick recommendation to avoid scrolling through too many options.
   - **Personalized Recommendations** — When searching for food, users want results tailored to their preferences so they can find something they like quickly.
   - **Natural Language Search** — When users have a specific need, they want to describe it naturally to avoid using rigid filters.
   - **Easy Comparison** — When choosing between options, users want to compare them side-by-side to make a confident decision.
   - **Time-Sensitive Choice** — When time is limited, users want one clear recommendation so they can decide immediately.

6. **System Overview / Architecture**

   - **Frontend:** React + TypeScript, built with Vite, styled with Tailwind CSS and Material UI (MUI).
   - **Routing:** React Router DOM with routes for `/` (Landing), `/search`, `/menu`, `/orders`, `/checkout`, `/confirm`, and `/register`.
   - **Component Structure:**
     - `src/components/pages/` — Page-level components: Landing, Search, SearchResult, TopResult, Menu, MenuItems, Checkout, OrderConfirm, Orders, Register.
     - `src/components/layout/` — Shared layout: Navbar (with hamburger menu and Back button), Sidebar (Register, Home, Current Orders links).
   - **Backend / Database:** Designed by Sree Mourya Gojja (in progress).

7. **Key Features**

   - **Natural Language Search Bar** — Users describe what they want in plain text (e.g., "cheap food near me").
   - **Top Pick For You** — A highlighted recommendation card (green border) shown at the top of search results.
   - **Search Results List** — Scrollable list of restaurants with photo, name, star rating, price level, and distance.
   - **Filter Panel** — Filter by price range, distance, and rating.
   - **Restaurant Menu Page** — Browse menu items with photos, names, and prices; select items via checkbox.
   - **Checkout Page** — Order summary with itemized prices, 6% tax calculation, $5 delivery fee, and total.
   - **Order Confirmation** — Confirmation screen after placing an order.
   - **User Registration** — Account creation form (first name, email, password, Terms of Service agreement).
   - **Sidebar Navigation** — Access Home, Current Orders, and Register from any screen.

8. **Interaction & Functionality**

   The typical user flow is:
   1. **Landing** — User enters a natural language query and taps Search.
   2. **Search Results** — A "Top Pick For You" card appears at the top, followed by additional restaurant options. Users can apply filters or tap "Order" on any restaurant.
   3. **Menu** — User browses menu items, selects desired items via checkboxes, and taps "Place Order."
   4. **Checkout** — User reviews selected items, sees the calculated total (with tax and delivery fee), and confirms the order.
   5. **Order Confirmation** — Success screen with a Return button to go back home.

9. **Challenges**

   - Coordinating meeting times was difficult due to different schedules among team members.
   - Midterm examinations and other academic commitments reduced the time available to work on the project.
   - Balancing the amount of information shown in search results — displaying too many results at once can overwhelm users and reduce usability, which is a core problem we are trying to solve.

10. **Future Work**

    - Integrate a real AI/ML backend to power personalized recommendations and natural language query interpretation.
    - Implement a live restaurant and menu database (replacing current placeholder data).
    - Add side-by-side restaurant comparison view.
    - Build out the Current Orders page with real-time order tracking.
    - Implement user authentication and persistent user profiles.
    - Add context-aware recommendations based on time of day, location, and past orders.

11. **Setup Instructions**:

    - Install npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

        - Windows/Mac: 
            - Open https://nodejs.org/en/download/ in your browser
            - IGNORE the command line instructions unless you already have Chocolatey or Docker installed
            - Download and run the prebuilt Node.js installer for Windows/MacOS 

        - Linux: 
            - Install 'curl' with 'apt' on command line:
                sudo apt install curl
            - Open https://nodejs.org/en/download/ in your browser
            - Change dropdowns to Get Node.js [v25.9.0] for [Linux] using [nvm] with [npm]
            - IGNORE the prebuilt instructions
            - follow instructions for command line
                - should NOT require corepack

    - cd from this folder into /app on command line
    - Run:
        npm i
        npm run dev
        
    - 'npm i' installs required dependencies (TailwindCSS, react)
        - ideally, should only need to be run once after cloning project
    - 'npm run dev' launches the webpage 

    - open localhost:5173 in browser

12. **Demo Video Link**:

    *(To be added)*

13. **Contributions Breakdown**:

    | Team Member | Contributions |
    |---|---|
    | Thang Nguyen | Research & problem statement, heuristic evaluation of Yelp, thematic analysis, hypothesis formulation |
    | Ryan Chang | Frontend development (React/TypeScript components, routing, UI styling) |
    | Sree Mourya Gojja | Frontend development, backend design, database architecture |

14. **Appendix: Repository Structure**

    ```
    Final_Project_Group1_CS235/
    ├── README.md                          # This file — project documentation
    ├── CS235-Final Project.pdf            # UI prototype storyboard & job stories
    ├── CS235_Final_Project_Heuristic_Evaluation.docx.pdf   # Heuristic evaluation of Yelp
    ├── CS235_Final_Project_Team1.pdf      # Midterm presentation slides (timeline, team, challenges)
    ├── CS235_Final_Project_FinalPresentation.pdf           # Final presentation slides (to be added)
    └── app/                               # React/TypeScript frontend application
        ├── index.html
        ├── vite.config.ts
        ├── package.json
        ├── tsconfig.json
        ├── tsconfig.app.json
        ├── tsconfig.node.json
        ├── eslint.config.js
        ├── public/
        │   ├── favicon.svg
        │   ├── icons.svg
        │   └── photos/                    # Restaurant & food placeholder images
        │       ├── Restaurant1.jpg – Restaurant4.jpg
        │       └── Food1.jpg – Food4.jpg
        └── src/
            ├── main.tsx                   # App entry point
            ├── App.tsx                    # Route definitions
            ├── App.css
            ├── index.css
            ├── assets/                    # Static assets (SVGs, images)
            └── components/
                ├── layout/
                │   ├── Navbar.tsx         # Top nav bar with hamburger & Back button
                │   └── Sidebar.tsx        # Slide-out sidebar navigation
                └── pages/
                    ├── Landing.tsx        # Home screen with search input
                    ├── Search.tsx         # Search results with Top Pick + list
                    ├── SearchResult.tsx   # Individual restaurant card
                    ├── TopResult.tsx      # Highlighted "Top Pick For You" card
                    ├── Menu.tsx           # Restaurant menu page
                    ├── MenuItems.tsx      # Individual menu item card
                    ├── Checkout.tsx       # Order summary with tax & total
                    ├── OrderConfirm.tsx   # Order confirmation screen
                    ├── Orders.tsx         # Current orders (placeholder, only shows empty page)
                    └── Register.tsx       # User registration form (Doesn't work)
    ```

