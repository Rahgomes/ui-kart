import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import styles from './lapTime.module.css';

const positions = [
	{ label: '#1', value: 1 },
	{ label: '#2', value: 2 },
	{ label: '#3', value: 3 },
	{ label: '#4', value: 4 },
	{ label: '#5', value: 5 },
	{ label: '#6', value: 6 },
	{ label: '#7', value: 7 },
	{ label: '#8', value: 8 },
	{ label: '#9', value: 9 },
	{ label: '#10', value: 10 },
	{ label: '#11', value: 11 },
	{ label: '#12', value: 12 },
	{ label: '#13', value: 13 },
	{ label: '#14', value: 14 },
	{ label: '#15', value: 15 },
	{ label: '#16', value: 16 },
	{ label: '#17', value: 17 },
	{ label: '#18', value: 18 },
	{ label: '#19', value: 19 },
	{ label: '#20', value: 20 },
	{ label: '#21', value: 21 },
	{ label: '#22', value: 22 },
	{ label: '#23', value: 23 },
	{ label: '#24', value: 24 },
	{ label: '#25', value: 25 },
	{ label: '#26', value: 26 },
	{ label: '#27', value: 27 },
	{ label: '#28', value: 28 },
	{ label: '#29', value: 29 },
	{ label: '#30', value: 30 },
	{ label: '#31', value: 31 },
	{ label: '#32', value: 32 },
	{ label: '#33', value: 33 },
	{ label: '#34', value: 34 },
	{ label: '#35', value: 35 },
	{ label: '#36', value: 36 },
	{ label: '#37', value: 37 },
	{ label: '#38', value: 38 },
	{ label: '#39', value: 39 },
	{ label: '#40', value: 40 },
	{ label: '#41', value: 41 },
	{ label: '#42', value: 42 },
	{ label: '#43', value: 43 },
	{ label: '#44', value: 44 },
	{ label: '#45', value: 45 },
	{ label: '#46', value: 46 },
	{ label: '#47', value: 47 },
	{ label: '#48', value: 48 },
	{ label: '#49', value: 49 },
	{ label: '#50', value: 50 },
	{ label: '#51', value: 51 },
	{ label: '#52', value: 52 },
	{ label: '#53', value: 53 },
	{ label: '#54', value: 54 },
	{ label: '#55', value: 55 },
	{ label: '#56', value: 56 },
	{ label: '#57', value: 57 },
	{ label: '#58', value: 58 },
	{ label: '#59', value: 59 },
	{ label: '#60', value: 60 },
	{ label: '#61', value: 61 },
	{ label: '#62', value: 62 },
	{ label: '#63', value: 63 },
	{ label: '#64', value: 64 },
	{ label: '#65', value: 65 },
	{ label: '#66', value: 66 },
	{ label: '#67', value: 67 },
	{ label: '#68', value: 68 },
	{ label: '#69', value: 69 },
	{ label: '#70', value: 70 },
];

const LapTime = () => {
	const [selectedPosition, setSelectedPosition] = useState(null);

	const onPositionChange = (e) => {
		setSelectedPosition(e.value);
	};
	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className={`modal-content ${styles.bg_modal_options}`}>
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Kart Options
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<Dropdown
								value={selectedPosition}
								options={positions}
								onChange={onPositionChange}
								placeholder="Select your kart"
								optionLabel="label"
								optionValue="value"
								showClear
								className="w-100"
							/>
						</div>
						<div className="modal-footer">
							<Button className={`p-button-sm ${styles.btn_custom_black} p-2 me-2`} disabled={!selectedPosition}>
								<i className="pi pi-flag pe-2"></i>
								<span className="">START</span>
							</Button>

							<Button className={`p-button-sm ${styles.btn_custom_red} p-button-danger p-2`} data-bs-dismiss="modal">
								<i className="pi pi-times pe-2"></i>
								<span className="">REFUSE</span>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.bg}`}>
				<div className={`container-fluid ${styles.portrait_container_alignment}`}>
					<div className="row">
						<div className={`col-3 col-md-3 pt-4 pt-md-5 ${styles.portrait_disable}`}>
							<div className={`${styles.card_info_lg} mb-2 mb-md-4 p-1`}>
								<p className="my-0">
									<span className={`${styles.info_num} pt-1`}>P 07</span>
								</p>
							</div>

							<div className={`${styles.card_info_sm} mb-2 mb-md-4 p-1`}>
								<p className="my-1">
									<span>kart</span> <span className={`${styles.info_num} pt-1`}>#33</span>
								</p>
							</div>

							<div className={`${styles.card_info_sm} mb-2 mb-md-4 p-1`}>
								<p className="my-2">
									<span className={styles.info_num}>00:09:652</span>
								</p>
							</div>

							<div
								className={`${styles.card_info_sm} d-flex align-items-center justify-content-center ${styles.card_info_sm__custom_size}`}
							>
								<p className="my-2 p-2">
									<span className={`text-center ${styles.card_info_sm__name}`}>Paulo Constantino</span>
								</p>
							</div>
						</div>
						<div className={`col-6 col-md-6 pt-md-3 ${styles.portrait_col_12}`}>
							<div className="d-flex mt-2">
								<div className="flex-1 me-1">
									<p className={`m-0 text-center ${styles.card_info_position__title}`}>Position</p>
									<div className={`${styles.card_info_position} mb-2 mb-md-4`}>
										<p className="my-1">
											<span className={`${styles.info_num} pt-1`}>P 08</span>
										</p>
									</div>
								</div>
								<div className="flex-1 ml-1">
									<p className={`m-0 text-center ${styles.card_info_position__title}`}>Kart</p>
									<div className={`${styles.card_info_position} mb-2 mb-md-4`}>
										<p className="my-1">
											<span className={`${styles.info_num} pt-1`}>#12</span>
										</p>
									</div>
								</div>
							</div>
							<div>
								<p className={`m-0 text-center ${styles.card_info_position__title}`}>Current Lap</p>
								<div className={`${styles.card_info_current} mb-1 mb-md-2`}>
									<p className="my-2">
										<span className={styles.info_num}>00:50:916</span>
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className={`${styles.card_info_lap} mb-2 mb-md-4`}>
									<p className="my-0 py-1 px-2">
										<span className="me-2">+</span>
										<span className={`${styles.info_num} pt-2`}>00:01:843</span>
									</p>
								</div>
							</div>
							<div>
								<p className={`m-0 text-center ${styles.card_info_fastest__title}`}>Fastest Lap</p>
								<div className={`${styles.card_info_fastest} mb-2 mb-md-4`}>
									<p className="my-2">
										<span className={styles.info_num}>00:49:652</span>
									</p>
								</div>
							</div>
						</div>
						<div className={`col-3 col-md-3 pt-4 pt-md-5  ${styles.portrait_disable}`}>
							<div className={`${styles.card_info_lg} mb-2 mb-md-4 p-1`}>
								<p className="my-0">
									<span className={`${styles.info_num} pt-1`}>P 09</span>
								</p>
							</div>

							<div className={`${styles.card_info_sm} mb-2 mb-md-4 p-1`}>
								<p className="my-1">
									<span>kart</span> <span className={`${styles.info_num} pt-1`}>#55</span>
								</p>
							</div>

							<div className={`${styles.card_info_sm} mb-2 mb-md-4 p-1`}>
								<p className="my-2">
									<span className={styles.info_num}>00:11:234</span>
								</p>
							</div>

							<div
								className={`${styles.card_info_sm} d-flex align-items-center justify-content-center ${styles.card_info_sm__custom_size}`}
							>
								<p className="my-2 p-2">
									<span className={`text-center ${styles.card_info_sm__name}`}>Gustavo Henrique Siqueira</span>
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="d-flex justify-content-center">
								<button
									className={`btn btn-light p-3 p-md-4 me-4 ${styles.btn_options}`}
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								></button>
								<button className={`btn btn-light p-3 p-md-4 me-4 ${styles.btn_options}`}></button>
								<button className={`btn btn-light p-3 p-md-4 ${styles.btn_options}`}></button>
							</div>
						</div>
					</div>
				</div>
				{/* <p className={styles.footer}>Kart Lap Time</p> */}
			</div>
		</>
	);
};

export default LapTime;
