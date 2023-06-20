using NATS.Client;
using System.Text;

ConnectionFactory cf = new ConnectionFactory();
IConnection c = cf.CreateConnection();

string json;
using (StreamReader r = new StreamReader("rates.json"))
{
  json = r.ReadToEnd();
}


using (ISyncSubscription s = c.SubscribeSync("rates"))
{
  while (true)
  {
    Msg msg = s.NextMessage();
    string msgSubject = msg.Subject;
    string msgPayload = Encoding.ASCII.GetString(msg.Data);
    c.Publish(new Msg(msg.Reply, Encoding.ASCII.GetBytes(json)));
    c.Flush();
  }
}









