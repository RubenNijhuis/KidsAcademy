import styled from 'styled-components';

export default Nav = styled.nav`
    @keyframes show {
        from {
            opacity: 0;
            transform: translateX(-5px);
        }

        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .navbar {
        backdrop-filter: blur(10px) !important;
        background-color: rgba(55, 55, 92, 1) !important;
        // box-shadow: 0 10px 20px rgba(25,25,72,0.1);
        color: white;
        padding: 0px 2.5%;
        min-height: 80px;

        button {
            border: none;
            outline: none;
        }
    }

    .nav-link {
        margin-bottom: 0.6em !important;
        font-size: 14px !important;
    }

    .dropdown-menu {
        margin-bottom: 5% !important;
        background: none;
        border: none;
    }

    .dropdown-item {
        font-size: 1em;
        color: white;
        transition: all 0.25s ease-in-out;
        text-decoration: underline;
    }

    .dropdown-menu.show {
        animation-name: show;
        animation-duration: 0.25s;
        animation-timing-function: ease-in-out;
    }

    .dropdown-toggle:after {
        margin-left: 10px;
    }

    nav > div > ul > li {
        margin: 0;
    }

    .navbar-brand {
        padding: 0;
        margin: 0;
        height: 80px;
        line-height: 80px;

        img {
            height: 50px;
            margin-bottom: 0;
            padding: 0;
        }

        a {
            margin: 0;
            padding: 0;
        }
    }

    .nav-link {
        font-size: 16px;
        transition: all 0.25s ease-in;
        color: rgba(255, 255, 255, 0.85) !important;
    }

    .navbar-toggle {
        /* (80px - button height 34px) / 2 = 23px */
        margin-top: 23px;
        padding: 9px 10px !important;
    }

    #navcta {
        a {
            background: linear-gradient(90deg, #14b09c 0%, #14b0b4 100%);
            padding: 5px 10px;
            border-radius: 3px;
            text-align: center;
            transition: all 0.25s ease-in-out;
            color: rgba(255, 255, 255, 0.85);
        }
        transition: all 0.25s ease-in-out;
        transform: translateY(0px);
    }

    @media (min-width: 768px) {
        #navcta:hover {
            cursor: pointer;
            a {
                color: rgba(255, 255, 255, 0.85) !important;
            }
            transform: translateY(-2px);
        }

        .navbar-expand-md .navbar-nav {
            align-items: center;
        }
        .navbar {
            padding: 0 5%;
        }

        .navbar-brand {
            img {
                height: 50px;
            }
        }

        .nav-link:hover {
            color: #14b09c !important;
        }

        .navbar-nav > li > a {
            /* (80px - line-height of 27px) / 2 = 26.5px */
            padding-top: 26.5px;
            padding-bottom: 26.5px;
            line-height: 27px;
            margin-bottom: 0 !important;
            margin-left: 10px !important;
        }

        .dropdown-menu.show {
            background-color: white;
            box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
            padding: 20%;
            padding-right: 60%;
            padding-bottom: 5%;

            .dropdown-item {
                color: #797b86;
                padding: 0;
                margin-bottom: 15%;
            }

            .dropdown-item:hover {
                color: #14b09c !important;
                box-sizing: border-box;
            }
        }

        #navcta {
            display: none;
        }
    }

    @media (min-width: 1000px) {
        #navcta {
            display: block;
        }
    }

    @media (min-width: 1440px) {
        .navbar-brand {
            img {
                height: 50px;
            }
        }

        .nav-link {
            font-size: 14px;
        }

        .dropdown-menu {
            top: 100%;
        }
    }

    @media (min-width: 2560px) {
        .navbar {
            min-height: 100px;
            padding-left: 25%;
            padding-right: 25%;
        }
    }
`;
