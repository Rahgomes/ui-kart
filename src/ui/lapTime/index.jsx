import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import API from 'services/LapTime';
import { initialState } from './mocks';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import styles from './lapTime.module.css';

const socket = io();

const LapTime = () => {
	const [state, setState] = useState(initialState);

	const [isConnected, setIsConnected] = useState(socket.connected);
	const [lastPong, setLastPong] = useState(null);

	useEffect(() => {
		getComboPositions();

		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.on('pong', () => {
			setLastPong(new Date().toISOString());
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('pong');
		};
	}, []);

	const sendPing = () => {
		socket.emit('ping');
	};

	const getComboPositions = () => {
		const res = API.getComboPositions();
		setState((prev) => ({ ...prev, positions: res }));
	};

	const onPositionChange = (e) => {
		setState((prev) => ({ ...prev, selectedPosition: e.value }));
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
								value={state.selectedPosition}
								options={state.positions}
								onChange={onPositionChange}
								placeholder="Select your kart"
								optionLabel="label"
								optionValue="value"
								showClear
								className="w-100"
							/>
						</div>
						<div className="modal-footer">
							<Button className={`p-button-sm ${styles.btn_custom_black} p-2 me-2`} disabled={!state.selectedPosition}>
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
