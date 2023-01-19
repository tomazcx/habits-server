import {PrismaClient} from "@prisma/client";
import {SELECT_SUMMARY} from "../../../shared/db/queries/SelectSummarySQL";
//import {SELECT_SUMMARY} from "../../../shared/db/queries/SelectSummarySQL";
import {IDaySummary} from "../domain/IDaySummary";

export class ShowSummaryService {
	public async execute(): Promise<IDaySummary[]> {
		const prisma = new PrismaClient()
		const summary = await prisma.$queryRawUnsafe(SELECT_SUMMARY)
		return summary as IDaySummary[]
	}
}
