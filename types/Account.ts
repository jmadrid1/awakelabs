export interface Account {
    id: string;
    participantId: string;
    wearableId: string;
    organizationId: string;
    careTeamId: string;
    anxietyLevel: number;
    anxietyState: string;
    baselineProgress: number;
    currentBpm: number;
    version: string;
}