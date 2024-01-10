export default function PopularDemandSection() {

    return (

        <>

            <div class="container px-4 py-5" id="custom-cards">
                <h2 class="pb-2" align="center" style={{ color: "#6A3CB5" }}><b>Popular Demand</b></h2>

                <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard1.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12.5 14H9.40875C9.92803 13.5363 10.4177 13.0406 10.875 12.5156C12.5906 10.5425 13.5 8.4625 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.4625 3.40688 10.5425 5.125 12.5156C5.58226 13.0406 6.07197 13.5363 6.59125 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM3.5 6.5C3.5 5.30653 3.97411 4.16193 4.81802 3.31802C5.66193 2.47411 6.80653 2 8 2C9.19347 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 10.0769 9.03312 13.0625 8 13.875C6.96688 13.0625 3.5 10.0769 3.5 6.5ZM10.5 6.5C10.5 6.00555 10.3534 5.5222 10.0787 5.11107C9.80397 4.69995 9.41352 4.37952 8.95671 4.1903C8.49989 4.00108 7.99723 3.95157 7.51227 4.04804C7.02732 4.1445 6.58186 4.3826 6.23223 4.73223C5.8826 5.08186 5.6445 5.52732 5.54804 6.01227C5.45157 6.49723 5.50108 6.99989 5.6903 7.45671C5.87952 7.91352 6.19995 8.30397 6.61107 8.57867C7.0222 8.85338 7.50555 9 8 9C8.66304 9 9.29893 8.73661 9.76777 8.26777C10.2366 7.79893 10.5 7.16304 10.5 6.5ZM6.5 6.5C6.5 6.20333 6.58797 5.91332 6.7528 5.66664C6.91762 5.41997 7.15189 5.22771 7.42597 5.11418C7.70006 5.00065 8.00166 4.97094 8.29264 5.02882C8.58361 5.0867 8.85088 5.22956 9.06066 5.43934C9.27044 5.64912 9.4133 5.91639 9.47118 6.20736C9.52906 6.49834 9.49935 6.79994 9.38582 7.07403C9.27229 7.34811 9.08003 7.58238 8.83335 7.7472C8.58668 7.91203 8.29667 8 8 8C7.60218 8 7.22064 7.84196 6.93934 7.56066C6.65804 7.27936 6.5 6.89782 6.5 6.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Eko Hotel & Suites</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard2.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12.5 14H9.40875C9.92803 13.5363 10.4177 13.0406 10.875 12.5156C12.5906 10.5425 13.5 8.4625 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.4625 3.40688 10.5425 5.125 12.5156C5.58226 13.0406 6.07197 13.5363 6.59125 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM3.5 6.5C3.5 5.30653 3.97411 4.16193 4.81802 3.31802C5.66193 2.47411 6.80653 2 8 2C9.19347 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 10.0769 9.03312 13.0625 8 13.875C6.96688 13.0625 3.5 10.0769 3.5 6.5ZM10.5 6.5C10.5 6.00555 10.3534 5.5222 10.0787 5.11107C9.80397 4.69995 9.41352 4.37952 8.95671 4.1903C8.49989 4.00108 7.99723 3.95157 7.51227 4.04804C7.02732 4.1445 6.58186 4.3826 6.23223 4.73223C5.8826 5.08186 5.6445 5.52732 5.54804 6.01227C5.45157 6.49723 5.50108 6.99989 5.6903 7.45671C5.87952 7.91352 6.19995 8.30397 6.61107 8.57867C7.0222 8.85338 7.50555 9 8 9C8.66304 9 9.29893 8.73661 9.76777 8.26777C10.2366 7.79893 10.5 7.16304 10.5 6.5ZM6.5 6.5C6.5 6.20333 6.58797 5.91332 6.7528 5.66664C6.91762 5.41997 7.15189 5.22771 7.42597 5.11418C7.70006 5.00065 8.00166 4.97094 8.29264 5.02882C8.58361 5.0867 8.85088 5.22956 9.06066 5.43934C9.27044 5.64912 9.4133 5.91639 9.47118 6.20736C9.52906 6.49834 9.49935 6.79994 9.38582 7.07403C9.27229 7.34811 9.08003 7.58238 8.83335 7.7472C8.58668 7.91203 8.29667 8 8 8C7.60218 8 7.22064 7.84196 6.93934 7.56066C6.65804 7.27936 6.5 6.89782 6.5 6.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Eko Hotel & Suites</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard3.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12.5 14H9.40875C9.92803 13.5363 10.4177 13.0406 10.875 12.5156C12.5906 10.5425 13.5 8.4625 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.4625 3.40688 10.5425 5.125 12.5156C5.58226 13.0406 6.07197 13.5363 6.59125 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM3.5 6.5C3.5 5.30653 3.97411 4.16193 4.81802 3.31802C5.66193 2.47411 6.80653 2 8 2C9.19347 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 10.0769 9.03312 13.0625 8 13.875C6.96688 13.0625 3.5 10.0769 3.5 6.5ZM10.5 6.5C10.5 6.00555 10.3534 5.5222 10.0787 5.11107C9.80397 4.69995 9.41352 4.37952 8.95671 4.1903C8.49989 4.00108 7.99723 3.95157 7.51227 4.04804C7.02732 4.1445 6.58186 4.3826 6.23223 4.73223C5.8826 5.08186 5.6445 5.52732 5.54804 6.01227C5.45157 6.49723 5.50108 6.99989 5.6903 7.45671C5.87952 7.91352 6.19995 8.30397 6.61107 8.57867C7.0222 8.85338 7.50555 9 8 9C8.66304 9 9.29893 8.73661 9.76777 8.26777C10.2366 7.79893 10.5 7.16304 10.5 6.5ZM6.5 6.5C6.5 6.20333 6.58797 5.91332 6.7528 5.66664C6.91762 5.41997 7.15189 5.22771 7.42597 5.11418C7.70006 5.00065 8.00166 4.97094 8.29264 5.02882C8.58361 5.0867 8.85088 5.22956 9.06066 5.43934C9.27044 5.64912 9.4133 5.91639 9.47118 6.20736C9.52906 6.49834 9.49935 6.79994 9.38582 7.07403C9.27229 7.34811 9.08003 7.58238 8.83335 7.7472C8.58668 7.91203 8.29667 8 8 8C7.60218 8 7.22064 7.84196 6.93934 7.56066C6.65804 7.27936 6.5 6.89782 6.5 6.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Eko Hotel & Suites</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard4.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12.5 14H9.40875C9.92803 13.5363 10.4177 13.0406 10.875 12.5156C12.5906 10.5425 13.5 8.4625 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.4625 3.40688 10.5425 5.125 12.5156C5.58226 13.0406 6.07197 13.5363 6.59125 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM3.5 6.5C3.5 5.30653 3.97411 4.16193 4.81802 3.31802C5.66193 2.47411 6.80653 2 8 2C9.19347 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 10.0769 9.03312 13.0625 8 13.875C6.96688 13.0625 3.5 10.0769 3.5 6.5ZM10.5 6.5C10.5 6.00555 10.3534 5.5222 10.0787 5.11107C9.80397 4.69995 9.41352 4.37952 8.95671 4.1903C8.49989 4.00108 7.99723 3.95157 7.51227 4.04804C7.02732 4.1445 6.58186 4.3826 6.23223 4.73223C5.8826 5.08186 5.6445 5.52732 5.54804 6.01227C5.45157 6.49723 5.50108 6.99989 5.6903 7.45671C5.87952 7.91352 6.19995 8.30397 6.61107 8.57867C7.0222 8.85338 7.50555 9 8 9C8.66304 9 9.29893 8.73661 9.76777 8.26777C10.2366 7.79893 10.5 7.16304 10.5 6.5ZM6.5 6.5C6.5 6.20333 6.58797 5.91332 6.7528 5.66664C6.91762 5.41997 7.15189 5.22771 7.42597 5.11418C7.70006 5.00065 8.00166 4.97094 8.29264 5.02882C8.58361 5.0867 8.85088 5.22956 9.06066 5.43934C9.27044 5.64912 9.4133 5.91639 9.47118 6.20736C9.52906 6.49834 9.49935 6.79994 9.38582 7.07403C9.27229 7.34811 9.08003 7.58238 8.83335 7.7472C8.58668 7.91203 8.29667 8 8 8C7.60218 8 7.22064 7.84196 6.93934 7.56066C6.65804 7.27936 6.5 6.89782 6.5 6.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Eko Hotel & Suites</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )

}