using System;
using System.Threading;

namespace ObserverPattern
{
    class Program
    {
        public static int amountMade;
        public static Timer timer;

        public static void UpdateMessage()
        {
            string updatedMessageWithAmount = "";
            amountMade += 200;
            updatedMessageWithAmount = $"You now have ${amountMade}";
            Console.WriteLine(updatedMessageWithAmount);
        }

        static void Main(string[] args)
        {
            //amountMade will be updated every 5 seconds by 200
            timer = new System.Threading.Timer(o => UpdateMessage(),
             null, 0, 5000);

            Console.ReadLine();
        }
    }
}
