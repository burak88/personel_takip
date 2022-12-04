interface IJob{
    id: number;
    category: string;
  color: string;
  projectName: string;
  createdDate: string;
  decription: string;
  status: boolean;
  userid : number;
  worktypeid : number;
}
export class JobsModel{
    static mapJobs(payload:any){
        const Jobs = Array<IJob>();
        payload.forEach((item:any) => {
            let newjob  = {} as IJob; 
            let date = new Date(item.date)
             newjob.category = item.workTypeName;
             newjob.color = "warning";
             newjob.projectName = item.projectName;
             newjob.createdDate = date.toLocaleDateString("tr-TR",{
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
             });
             newjob.decription = item.description;
             newjob.status = item.status;
             newjob.id = item.jobId;
             newjob.userid = item.userId;
             newjob.worktypeid = item.workTypeId
             Jobs.push(newjob)
        })
        return Jobs;
    }
}