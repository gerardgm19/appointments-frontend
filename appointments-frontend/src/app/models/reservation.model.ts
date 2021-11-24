export interface ReservationModel {
	machid: string;
	legacyid: string;
	resid: string;
	memberid: string;
	idnumber: string;
	resourceid: string;
	typologyTitle: string;
	userids: string[];
	checkinCode: any, // ??
	areaId: string;
	insuranceTitle: string;
	startDate: string;
	startTime: string;
	patientName: string;
	activityTitle: string;
	doctorName: string;
}