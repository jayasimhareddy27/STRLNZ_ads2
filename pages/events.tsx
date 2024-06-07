import Head from "next/head";

export default function Events() {
	const goToDebugger = () => {
		window.open("https://app.segment.com/jayasimha-reddy-66f4/sources/javascript/debugger", "_blank");
	};
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>
			<div>
				<h1>View Events</h1>
				<div>
					<i>View your Analytics.js events in Segment's debugger</i>
				</div>
				<button onClick={goToDebugger}>Go to Segment debugger</button>
			</div>
			<style jsx>{`
				button {
					padding: 20px;
					margin: 12px;
				}
			`}</style>
		</>
	);
}
