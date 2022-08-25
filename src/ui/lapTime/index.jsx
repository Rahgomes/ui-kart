import styles from './lapTime.module.css';

const LapTime = () => {
	return (
		<div className={`${styles.bg} d-flex align-items-center`}>
			<div className="container-fluid">
				<div className="row pt-3">
					<div className="col-4 d-flex justify-content-center">
						<div className={`d-flex flex-column py-2 px-5 ${styles.front_of}`}>
							<span className={`${styles.front_of__big} text-center`}>07</span>
							<span className={`${styles.front_of__big_pos} text-center`}>#21</span>
						</div>
					</div>
					<div className="col-4">
						<div className="d-flex flex-wrap justify-content-center">
							<p className={`${styles.position__title} text-center mb-2 w-100`}>position</p>
							<div className={`d-flex pt-3 pb-2 px-4 ${styles.position}`}>
								<span className={styles.position__big}>08</span>
							</div>
						</div>
					</div>
					<div className="col-4 d-flex justify-content-center">
						<div className={`d-flex flex-column py-2 px-5 ${styles.front_of}`}>
							<span className={`${styles.front_of__big} text-center`}>09</span>
							<span className={`${styles.front_of__big_pos} text-center`}>#55</span>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-4 d-flex align-items-end">
						<div className={`pt-2 pb-1 px-5 flex-1 text-center ${styles.front_of__timer}`}>
							<span className={`${styles.front_of__timer__big}`}>00:04:335</span>
						</div>
					</div>
					<div className="col-4">
						<p className={`${styles.latest_lap__title} text-center mb-2 w-100`}>latest lap</p>
						<div className={`pt-3 pb-2 px-3 text-center ${styles.latest_lap}`}>
							<span className={styles.latest_lap__big}>00:50:916</span>
						</div>
					</div>
					<div className="col-4 d-flex align-items-end">
						<div className={`pt-2 pb-1 px-5 flex-1 text-center ${styles.front_of__timer}`}>
							<span className={`${styles.front_of__timer__big}`}>00:11:193</span>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-4 offset-4">
							<p className={`${styles.fastest_lap__title} text-center mb-2 w-100`}>fastest lap</p>
							<div className={`pt-3 pb-2 px-3 text-center ${styles.fastest_lap}`}>
								<span className={styles.fastest_lap__big}>00:49:652</span>
							</div>
						</div>
				</div>
			</div>
			<p className={styles.footer}>Kart Lap Time</p>
		</div>
	);
};

export default LapTime;
